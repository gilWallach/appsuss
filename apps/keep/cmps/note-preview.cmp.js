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
    <button class="pin" @click.stop="togglePin()" :title="setTitle"><i :class="isPinned" class="btn" aria-hidden="true"></i></button>
    <div className="note-action-btns">
        <button @click.stop="archive()" title="archive note"><i class="fa fa-archive btn" aria-hidden="true"></i></button>
        <button @click.stop="remind()" title="remind note"><i class="fa fa-bell btn" aria-hidden="true"></i></button>
        <label @click.stop="colorMenu=!colorMenu" class="btn"><img src="assets/img/icons/palette.png" alt="" /></label>
        <button @click.stop="remove()" title="remove note"><i class="fa fa-trash-o btn" aria-hidden="true"></i></button>  
        <color-picker :noteId="note.id" @color-changed="changeColor" :isOpen="colorMenu"/>
    </div>
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
        setTitle() {
            return (this.note.isPinned) ? 'Unpin note' : 'Pin note'
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        colorPicker
    }
}