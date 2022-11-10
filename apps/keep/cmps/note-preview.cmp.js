import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js"

export default {
    props: ['note'],
    emits:['save'],
    name: 'note-preview',
    template: `
    <component 
    :is=note.type
    :info= note.info
    @toggle="saveNote">
    </component>

    `,
    methods: {
        saveNote() {
            this.$emit('save',this.note)
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
    }
}