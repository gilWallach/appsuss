// list cmp
// filter cmp watch url changes (queryParams) emit to mail-index update mailsToShow for list
import { mailService } from '../services/mail.service.js'

import mailHeader from '../cmps/mail-header.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

export default {
    template: `
    <main class="mail-index">
        <mail-header />
        <mail-list 
        :mails="mailsToShow"
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
        }
    },
    methods: {

    },
    computed: {
        mailsToShow() {
            return this.mails
        }
    },
    components: {
        mailList,
        mailHeader,
    }

}
