import mailEdit from '../cmps/mail-edit.cmp.js'

export default {
    emits: ['filter', 'update'],
    props: ['criteria', 'mails', 'user'],
    template: `
    <section class="aside-continer">
        <div className="mail-add-container">
        <router-link 
        to="/mail/edit"
        @update="update">
            <button class="add-mail flex align-center">
                <i class="fa fa-pencil" aria-hidden="true"></i>Compose
            </button>

        </router-link>

        </div>

        <div className="mail-filter-container">
            <ul  v-if="mails">
                <li @click="filterStatus('inbox')" 
                class="flex"
                :class="{ 'IS-ACTIVATED': $route.query.status === 'inbox' 
                || ($route.name === 'mail' && !$route.query.status && !$route.query.isRead )}">
                    <span class="i-container flex">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                    </span>
                    <div class="aside-txt flex">
                        <span>Inbox</span>
                        <span>{{ statusMailsCount('inbox') }}</span>
                    </div>
                </li>
                <li @click="filterIsRead" 
                class="flex"
                :class="{ 'IS-ACTIVATED': $route.query.isRead}" >
                    <span class="i-container flex">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                    </span>
                    <div class="aside-txt flex">
                        <span>Read</span>
                        <span>{{ readMailsCount }}</span>
                    </div>    
                </li>
                <li @click="filterStatus('sent')" 
                class="flex"
                :class="{ 'IS-ACTIVATED': $route.query.status === 'sent'}" >
                    <span class="i-container flex">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                    </span>
                    <div class="aside-txt flex">
                        <span>Sent</span>
                        <span>{{ statusMailsCount('sent') }}</span>
                    </div>
                </li>
                <li @click="filterStatus('draft')"
                 class="flex"
                 :class="{ 'IS-ACTIVATED': $route.query.status === 'draft'}" >
                    <span class="i-container flex">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                    </span>
                    <div class="aside-txt flex">
                        <span>Drafts</span>
                        <span>{{ statusMailsCount('draft') }}</span>
                    </div>
                </li>
                <li @click="filterStatus('trash')" 
                class="flex"
                :class="{ 'IS-ACTIVATED': $route.query.status === 'trash'}" >
                    <span class="i-container flex">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                    </span>
                    <div class="aside-txt flex">
                        <span>Trash</span>
                        <span>{{ statusMailsCount('trash') }}</span>
                    </div>
                </li>
            </ul>
        <!-- <h4>Labels</h4>
    <ul v-if="criteria">
        <li v-for="label in criteria.labels"
            @click="filterLabels(label)">{{label}}</li>
    </ul> -->
        </div>
    </section>
    `,
    methods: {
        statusMailsCount(category) {
            let counter = 0
            this.mails.map(mail => {
                if (mail.status === category) counter++
            })
            return counter === 0 ? '' : counter
        },
        filterIsRead(){
            this.$router.push({ query: { isRead: true } })
        },
        filterStatus(status) {
            this.$router.push({ query: { status: status } })
        },
        filterLabels(label) {
            this.$router.push({ query: { label: label } })
        },
        update(mail){
            this.$emit('update', mail)
        },
    },
    computed: {
        readMailsCount() {
            let counter = 0
            this.mails.map(mail => {
                if (mail.isRead && mail.status === 'inbox') counter++
            })
            return counter === 0 ? '' : counter
        }

    },
    components: {
        mailEdit,
    },
}