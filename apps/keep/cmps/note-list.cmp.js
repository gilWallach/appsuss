// ?? difference between note-preview & note-details
// two section: pinned & others - same cmp with different filter values

import notePreview from "./note-preview.cmp.js"

export default {
    props:['notes'],
    name:'note-list',
    emits:['property-change'],
    template:`
    <h1>Hello from note list</h1>
    <ul class="notes-list">
        <li class="note-item" v-for="note in notes" :style="styleNote(note)">
            <note-preview :note="note"/>
            <div className="action-btns">
                <label htmlFor="color"><img src="assets/img/icons/paint-palette.svg" alt="" /></label>
                <input type="color" className="btn" id="color" v-model="note.style.backgroundColor" @change="save(note)"/>  
                <button>X</button>  
            </div>
        </li>
    </ul>
    `,
    methods:{
        styleNote(note){
            return {backgroundColor:note.style.backgroundColor}
        },
        save(note){
            this.$emit('property-change',note)
        }
    },
    components:{
        notePreview,
    }
}