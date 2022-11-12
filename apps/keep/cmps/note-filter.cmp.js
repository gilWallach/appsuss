export default {
    emits: ['filter'],
    name: 'notes-filter',
    template: `
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                status:'notes'
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
            return this.$route.query
        }
    },
    watch:{
        urlChange(){
            console.log('filter changed');
            this.filterBy.txt = this.$route.query.txt
            this.filterBy.status = this.$route.query.status
            this.filter()
        }
    }
}