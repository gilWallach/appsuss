// ?? difference between note-preview & note-details
// two section: pinned & others - same cmp with different filter values

import notePreview from "./note-preview.cmp.js"

export default {
    props: ['notes', 'subtitle'],
    name: 'note-list',
    emits: ['property-change', 'remove'],
    template: `
        <section className="list-container main-layout">
            <h3 v-if="notes.length">{{subtitle}}</h3>
            <ul class="notes-list clean-list">
                <li 
                class="note-item" 
                v-for="note in notes" 
                :style="styleNote(note)">
                    <div @click="$router.push('/keep/' + note.id)" className="note-container">
                        <note-preview
                        v-if="note"
                        @remove="remove"
                        @toggle-pin="togglePin" 
                        @save="save" :note="note"/>
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
            console.log('removing', noteId);
            this.$emit('remove', noteId)
        },
        togglePin(note) {
            note.isPinned = !note.isPinned
            this.save(note)
        }
    },
    computed: {


    },
    components: {
        notePreview,
    }
}