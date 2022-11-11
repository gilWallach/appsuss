import mailEdit from '../cmps/mail-edit.cmp.js'

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

            <ul>
                <a href="#"><li>Inbox</li></a>
                <a href="#"><li>Starred</li></a>
                <a href="#" v-if="mails"><li>Read <span>{{ readMailsCount }}</span></li></a>
                <a href="#"><li>Sent</li></a>
                <a href="#"><li>Drafts</li></a>
                <a href="#"><li>Trash</li></a>
            </ul>
        <h4>Labels</h4>
    <ul v-if="criteria">
        <a v-for="label in criteria.labels" href="#"><li>{{label}}</li></a>
    </ul>
        </div>
    </section>
    <router-view/>
    `,
    computed: {
        readMailsCount() {
            let counter = 0
            this.mails.map(mail => {
                if (mail.isRead) counter++
            })
            return counter === 0 ? '' : counter
        }
    },
    components: {
        mailEdit,
    },
}