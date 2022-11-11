// main page
// cmps: note-list + note-filter
import { noteService } from "../services/note.service.js"

import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteEdit from "../cmps/note-edit.cmp.js"

// import mailHeader from "../../mail/cmps/mail-header.cmp.js"
import noteAside from "../cmps/note-aside.cmp.js"


export default {
    name: 'note-index',
    template: `

    <!-- <mail-header :type="'keep'"/> -->
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
        }
    },
    computed: {
        notesToShow() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            var notes = this.notes.filter(note => regex.test(note.info.txt))
            // notes = notes.filter(note => note.maxSpeed > this.filterBy.minSpeed)
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
        // mailHeader,
        noteAside
    }
}
