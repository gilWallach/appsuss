import mailEdit from '../cmps/mail-edit.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    emits: ['filter'],
    props: ['criteria', 'mails',],
    template: `
    <section class="aside-continer">
        <div className="mail-add-container">
        <router-link to="/mail/edit">
            <button class="add-mail flex align-center">
                <i class="fa fa-pencil" aria-hidden="true"></i>Compose
            </button>
        </router-link>

        </div>
        <div className="mail-filter-container">
            <mail-filter :criterias="criteria"
            :mails="mails"
            @filter="filter"/>
        </div>
    </section>
    <router-view/>
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