// main page
// cmps: note-list + note-filter
import { noteService } from "../services/note.service.js"

import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteEdit from "../cmps/note-edit.cmp.js"
import noteDetails from "./note-details.cmp.js"

import noteAside from "../cmps/note-aside.cmp.js"


export default {
    name: 'note-index',
    template: `

    <note-filter
    @filter="setFilter"
    />

    <main class="main-app">
        <note-aside/>
        <div className="content-container">
            <note-edit
            @note-saved="saveNote"/>

            <note-list
            v-if="pinnedNotes"
            @remove="removeNote"
            @property-change="saveNote"
            :notes="pinnedNotesToShow"
            :subtitle="'PINNED'"/>
        
            <note-list
            v-if="unPinnedNotes"
            @remove="removeNote"
            @property-change="saveNote"
            :notes="unPinnedNotesToShow"
            :subtitle="'OTHERS'"/>
        </div>
    </main>
    <router-view @remove="removeNote" @save="saveNote"></router-view>

    `,
    data() {
        return {
            notes: null,
            pinnedNotes: null,
            unPinnedNotes: null,
            filterBy: {}
        }
    },
    created() {
        this.filterBy.txt = this.$route.query.txt
        this.filterBy.status = this.$route.query.status
        this.loadNotes()
    },
    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                    console.log(notes);
                    this.pinnedNotes = notes.filter(note => note.isPinned)
                    this.unPinnedNotes = notes.filter(note => !note.isPinned)
                }
                )
        },
        saveNote(note) {
            noteService.save(note)
                .then(() => this.loadNotes())
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => this.loadNotes())
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log(this.filterBy);
        },
        updateNote(updatedNote){
           const idx = this.notes.findIndex(note=>note.id===updatedNote.id)
           this.notes.splice(idx,1,updatedNote)
        }
    },
    computed: {
        notesToShow() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            var notes = this.notes.filter(note => regex.test(note.info.txt))
            if(this.filterBy.status === 'reminders') notes = notes.filter(note => note.isReminded && !note.deletedAt && !note.isArchived)
            else if(this.filterBy.status === 'archive') notes = notes.filter(note => note.isArchived && !note.deletedAt && !note.isReminded)
            else if(this.filterBy.status === 'trash') notes = notes.filter(note => note.deletedAt)
            else notes = notes.filter(note => !note.deletedAt && !note.isArchived && !note.isReminded)
            return notes
        },
        pinnedNotesToShow() {
            const filteredNotes = this.notesToShow
            return filteredNotes.filter(note => note.isPinned)
        },
        unPinnedNotesToShow() {
            const filteredNotes = this.notesToShow
            return filteredNotes.filter(note => !note.isPinned)
        }
    },
    components: {
        noteFilter,
        noteList,
        noteEdit,
        noteAside,
        noteDetails
    }
}
