// ?? difference between note-preview & note-details
// two section: pinned & others - same cmp with different filter values

import notePreview from "./note-preview.cmp.js"

export default {
    props: ['notes', 'subtitle'],
    name: 'note-list',
    emits: ['property-change', 'remove'],
    template: `
        <section className="list-container main-layout">
            <h3>{{subtitle}}</h3>
            <ul class="notes-list clean-list">
                <li class="note-item" v-for="note in notes" :style="styleNote(note)">
                    <h3 v-if="note.info.title">{{note.info.title}}</h3>
                    <note-preview @save="save" :note="note"/>
                    <div className="action-btns">
                        <button class="pin" @click="togglePin(note)" :title="setTitle">{{isPinned}}</button>
                        <label htmlFor="color" class="btn" >🎨</label>
                        <input @change="save(note)" v-model="note.style.backgroundColor" type="color" className="btn" id="color" title="Change background color"/>  
                        <button @click="remove(note.id)" title="remove note"><i class="fa fa-trash-o" aria-hidden="true"></i></button>  
                    </div>
                </li>
            </ul>
        </section>
    `,
    methods:
    {
        styleNote(note) {
            return { backgroundColor: note.style.backgroundColor }
        },
        save(note) {
            this.$emit('property-change', note)
        },
        remove(noteId) {
            console.log('removing',noteId);
            this.$emit('remove', noteId)
        },
        togglePin(note){
            note.isPinned = !note.isPinned
            this.save(note)
        }
    },
    computed:{
        isPinned(){
         return ( this.subtitle === 'PINNED') ? '🔕' : `🔔`
        },
        setTitle(){
            return ( this.subtitle === 'PINNED') ? 'Unpin note' : 'Pin note'
        }
    },
    components: {
        notePreview,
    }
}