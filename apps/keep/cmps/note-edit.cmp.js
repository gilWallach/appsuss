import { noteService } from "../services/note.service.js"

export default {
    emits: ['note-saved',],
    name: 'note-edit',
    template: `
    <section className="note-edit flex justify-center align-center">
        <form @submit.prevent="createNote">
            <input type="text" v-model="input" :placeholder="placeholder"/>
        </form>
        
        <div className="action-btns">
            <button :class="{active:isActive('txt')}" @click="setType('txt')"><i class="fa fa-font" aria-hidden="true"></i></button>
            <button :class="{active:isActive('todos')}" @click="setType('todos','Enter comma seperated list...')"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
            <button :class="{active:isActive('img')}" @click="setType('img','Enter img URL...')"><i class="fa fa-picture-o" aria-hidden="true"></i></button>
            <button :class="{active:isActive('video')}" @click="setType('video','Enter video URL...')"><i class="fa fa-video-camera" aria-hidden="true"></i></button>
        </div>
    </section>
    `,
    data() {
        return {
            note: noteService.getEmptyNote(),
            input: '',
            placeholder: "Enter your note...",
        }
    },
    methods: {
        setType(type, msg = 'Enter your note...') {
            this.note = noteService.getEmptyNote()
            this.note.type = 'note-' + type
            this.placeholder = msg
        }
        ,
        createNote() {
            switch (this.note.type) {
                case ('note-txt'):
                    console.log('im text');
                    this.note.info.txt = this.input
                    break
                case ('note-img'):
                    this.note.info.url = this.input
                    break
                case ('note-video'):
                    this.note.info.url = this.input
                    break
                case ('note-todos'):
                    const inputs = this.input.split(',')
                    const todos = inputs.map(input => ({ txt: input, doneAt: null }))
                    this.note.info.todos = todos
                    break
            }
            console.log(this.note);
            this.$emit('note-saved', { ...this.note })
            this.note = noteService.getEmptyNote()
            this.input = ''
        },
        isActive(type) {
            return this.note.type.includes(type)
        }
    }
}