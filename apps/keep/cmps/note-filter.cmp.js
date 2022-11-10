export default {
    emits: ['filter'],
    name: 'notes-filter',
    template: `
    <section className="note-filter">
        <input v-model="filterBy.txt" type="text" @input="filter"/>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        filter() {
            console.log('filtering');
            this.$emit('filter', this.filterBy)
        }
    },
    computed:{
        urlChange(){
            return this.$route.query.txt
        }
    },
    watch:{
        urlChange(){
            console.log('filter changed');
            this.filterBy.txt = this.$route.query.txt
            this.filter()
        }
    }
}