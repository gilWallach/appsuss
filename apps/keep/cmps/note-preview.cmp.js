import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"

import { noteService } from "../services/note.service.js"

export default {
    props:['note'],
    name:'note-preview',
    template:`
    <component 
    :is=note.type
    :info= note.info
    @toggle="saveNote">
    </component>
    `,
    methods:{
        saveNote(){
            noteService.save(this.note)
        }
    },
    components:{
        noteTxt,
        noteImg,
        noteTodos
    }
}