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
            <ul  v-if="mails">
                <li><span>Inbox</span><span>{{ statusMailsCount('inbox') }}</span></li>
                <li><span>Read</span><span>{{ readMailsCount }}</span></li>
                <li><span>Sent</span><span>{{ statusMailsCount('sent') }}</span></li>
                <li><span>Drafts</span><span>{{ statusMailsCount('draft') }}</span></li>
                <li><span>Trash</span><span>{{ statusMailsCount('trash') }}</span></li>
            </ul>
        <h4>Labels</h4>
    <ul v-if="criteria">
        <li v-for="label in criteria.labels">{{label}}</li></a>
    </ul>
        </div>
    </section>
    <router-view/>
    `,
    methods: {
        statusMailsCount(category) {
            let counter = 0
            this.mails.map(mail => {
                if (mail.status === category) counter++
            })
            return counter === 0 ? '' : counter
        },
    },
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