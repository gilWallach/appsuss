// main page
// cmps: note-list + note-filter
import { noteService } from "../services/note.service.js"

import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteEdit from "../cmps/note-edit.cmp.js"

export default {
    name:'note-index',
    template: `
    <note-filter/>
    <note-edit/>
    <note-list
    @remove="removeNote"
    @property-change="saveNote"
    :notes="notes"/>
    `,
    data(){
        return {
            notes:null,
        }
    },
    created(){
        this.loadNotes()
    },
    methods:{
        loadNotes(){
            noteService.query()
            .then(notes=> this.notes = notes)
        },
        saveNote(note){
            noteService.save(note)
        },
        removeNote(noteId){
            noteService.remove(noteId)
            .then(()=>{
                const idx = this.notes.findIndex(note=>note.id === noteId)
                this.notes.splice(idx,1)
            })
        }
    },
    components: {
        noteFilter,
        noteList,
        noteEdit,
    }
}
