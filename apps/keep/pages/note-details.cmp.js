import { noteService } from "../services/note.service.js"
import notePreview from "../cmps/note-preview.cmp.js"

export default {
    emits:['save','remove'],
    template:`
        <div className="note-details-container">
            <div v-if="note" :style="setStyle" className="note-details flex flex-column align-center justify-center">
                    <note-preview v-if="note" :note="note" @remove="remove" @save="save" class="flex flex-column align-center justify-between"/>
            </div>
                <div @click="$router.push('/keep')" className="main-screen"></div>
        </div>
    `,
    data(){
        return {
            note:null
        }
    },
    created(){
        const id = this.$route.params.id
        noteService.get(id)
        .then(note=>{
            this.note=note
            console.log(this.note);
        })
    },
    methods:{
        save(note){
            this.$emit('save',note)
        },
        remove(noteId){
            this.$emit('remove',noteId)
            this.$router.push('/keep')
        }
    },
    computed:{
        setStyle(){
            return { backgroundColor: this.note.style.backgroundColor }
        }
    },
    components:{
        noteService,
        notePreview
    }
}