// ?? difference between note-preview & note-details
// two section: pinned & others - same cmp with different filter values

import notePreview from "./note-preview.cmp.js"

export default {
    props:['notes'],
    name:'note-list',
    emits:['property-change','remove'],
    template:`
    <section className="list-container">
        <h1>Hello from note list</h1>
        <ul class="notes-list clean-list main-layout">
            <li class="note-item" v-for="note in notes" :style="styleNote(note)">
                <h3 v-if="note.info.title">{{note.info.title}}</h3>
                <note-preview :note="note"/>
                <div className="action-btns">
                    <label htmlFor="color"><img src="assets/img/icons/paint-palette.svg" alt="" /></label>
                    <input type="color" className="btn" id="color" v-model="note.style.backgroundColor" @change="save(note)"/>  
                    <button @click="remove(note.id)">X</button>  
                </div>
            </li>
        </ul>
    </section>
    `,
    methods:
    {
        styleNote(note){
            return {backgroundColor:note.style.backgroundColor}
        },
        save(note){
            this.$emit('property-change',note)
        },
        remove(noteId){
            this.$emit('remove',noteId)
        }
    },
    components:{
        notePreview,
    }
}