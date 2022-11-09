import { noteService } from "../services/note.service.js"

export default {
    template: `
    <input type="text" v-model="input" @input="setValue"/>
    
    <div className="action btns">
        <button @click="setType('todos')">TickBox</button>
        <button @click="setType('img')">Image</button>
        <button @click="setType('video')">Video</button>
    </div>
    `,
    data() {
        return {
            note: noteService.getEmptyNote(),
            input: '',
            currTodo: 0
        }
    },
    methods: {
        setType(type) {
            this.note = noteService.getEmptyNote()
            this.note.type = 'note-' + type
        }
        ,
        setValue() {
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
                        this.input.split(',')
                        this.note.info.todos[i].txt = substring
                    
                    break
            }
            console.log(this.note);
        }
    }
}