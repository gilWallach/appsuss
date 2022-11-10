export default {
    template:`
    <section className="note-filter">
        <input v-model="filterBy.txt" type="text" />
    </section>
    `,
    data(){
        return {
            filterBy:{
                txt:''
            }
        }
    }
}