import mailEdit from '../cmps/mail-edit.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    props: ['criteria'],
    
    template: `
    <section class="aside-continer">
        <div className="mail-add-container">
            <mail-edit />
        </div>
        <div className="mail-filter-container">
            <mail-filter :criterias="criteria"/>
        </div>
    </section>
    `,
    components: {
        mailEdit,
        mailFilter,
    }
}