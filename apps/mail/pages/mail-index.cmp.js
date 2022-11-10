// list cmp
// filter cmp watch url changes (queryParams) emit to mail-index update mailsToShow for list
import { mailService } from '../services/mail.service.js'

import mailHeader from '../cmps/mail-header.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailAside from '../cmps/mail-aside.cmp.js'

export default {
    template: `
        <mail-header/>
    <main class="mail-index">
        <mail-aside
        @filter="filter"
        :criteria="criteria"
        :mails="mails" />

        <mail-list
        v-if="mails" 
        :mails="mailsToShow"
        :criteria="criteria"
        />
    </main>
    `,
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
    },
    data() {
        return {
            mails: null,
            user: mailService.getUser(),
            criteria: {},
        }
    },
    methods: {
        filter(filterBy) {
            this.criteria = filterBy
        }
    },
    computed: {
        mailsToShow() {
            const regex = new RegExp(this.criteria.txt, 'i')
            var mails = this.mails.filter(mail => regex.test(mail.subject))
            return mails
        }
    },
    components: {
        mailList,
        mailHeader,
        mailAside
    }

}
