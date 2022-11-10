import mailEdit from '../cmps/mail-edit.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    props: ['criteria'],
    
    template: `
    <section class="aside-continer">
        <div className="mail-add-container">
        <router-link to="/mail/mail-edit/">
            <button class="add-mail flex align-center">
                <i class="fa fa-pencil" aria-hidden="true"></i>Compose
            </button>            
        </router-link>

        </div>
        <div className="mail-filter-container">
            <mail-filter :criterias="criteria" @filter="filter"/>
        </div>
    </section>
    `,
    components: {
        mailEdit,
        mailFilter,
    },
    methods:{
        filter(filterBy){
            this.$emit('filter',filterBy)
        }
    }
}