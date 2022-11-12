import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js"

import colorPicker from "../../../cmps/color-picker.cmp.js"

export default {
    props: ['note'],
    emits: ['save', 'toggle-pin', 'remove'],
    name: 'note-preview',
    template: `
    <div className="preview-container">
        <h3 v-if="note.info.title">{{note.info.title}}</h3>
        <component 
        :is=note.type
        :info= note.info
        @toggle="saveNote">
    </component>
    <div className="note-action-btns">
        <button class="pin" @click.stop="togglePin()" :title="setPinTitle"><i :class="isPinned" aria-hidden="true"></i></button>
        <button @click.stop="archive()" :title="note.isArchived? 'Unarchive note' :'Archive note'"><i class="fa fa-archive" aria-hidden="true"></i></button>
        <button @click.stop="remind()" :title="note.isReminded ? 'Unremind note' : 'Remind note'"><i :class="isReminded" aria-hidden="true"></i></button>
        <label @click.stop="colorMenu=!colorMenu" class="btn" >🎨</label>
        <button @click.stop="remove()" title="remove note"><i class="fa fa-trash-o" aria-hidden="true"></i></button>  
    </div>
    <color-picker :noteId="note.id" @color-changed="changeColor" :isOpen="colorMenu"/>
    </div>

    `,
    data() {
        return {
            colorMenu: false
        }
    },
    methods: {
        saveNote() {
            this.$emit('save', this.note)
        },
        togglePin() {
            this.$emit('toggle-pin', this.note)
        },
        remove() {
            if(!this.note.deletedAt){
                this.note.deletedAt = Date.now()
                this.saveNote()
                return
            }
            this.$emit('remove', this.note.id)
        },
        changeColor(color) {
            this.note.style.backgroundColor = color
            this.saveNote()
        },
        archive(){
            this.note.isReminded = false
            this.note.deletedAt = null
            this.note.isArchived = !this.note.isArchived
            this.saveNote()
        },
        remind(){
            this.note.isArchived = false
            this.note.deletedAt = null
            this.note.isReminded = !this.note.isReminded
            this.saveNote()
        }
    },
    computed: {
        isPinned() {
            return (this.note.isPinned) ? 'fa fa-chain-broken' : `fa fa-link`
        },
        setPinTitle() {
            return (this.note.isPinned) ? 'Unpin note' : 'Pin note'
        },
        isReminded(){
            return (this.note.isReminded) ? 'fa fa-bell-o' : 'fa fa-bell' 
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        colorPicker
    }
}