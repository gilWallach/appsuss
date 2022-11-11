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
        <button class="pin" @click.stop="togglePin(note)" :title="setTitle">{{isPinned}}</button>
        <label @click.stop="colorMenu=!colorMenu" class="btn" >🎨</label>
        <!-- <input @click.stop @change="saveNote" v-model="note.style.backgroundColor" type="color" className="btn" id="color" title="Change background color"/>   -->
        <button @click.stop="remove(note.id)" title="remove note"><i class="fa fa-trash-o" aria-hidden="true"></i></button>  
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
        togglePin(note) {
            this.$emit('toggle-pin', note)
        },
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        changeColor(color) {
            this.note.style.backgroundColor = color
            this.saveNote()
        }
    },
    computed: {
        isPinned() {
            return (this.note.isPinned) ? '🔕' : `🔔`
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