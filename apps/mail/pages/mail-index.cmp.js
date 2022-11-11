// list cmp
// filter cmp watch url changes (queryParams) emit to mail-index update mailsToShow for list
import { mailService } from '../services/mail.service.js'

import mailList from '../cmps/mail-list.cmp.js'
import mailAside from '../cmps/mail-aside.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    template: `

    <mail-filter 
    @filter="filter"/>

    <main v-if="mails" class="mail-index">
        <mail-aside
        v-if="mails" 
        @filter="filter"
        :criteria="criterias"
        :mails="mails"
        />
        <mail-list
        v-if="mails" 
        :mails="mailsToShow"
        :criteria="criterias"
        @deleted="updatedMailList"
        />
    </main>
    `,
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                //get Labels
                const dupLabels = mails.reduce((acc, mail) => acc.concat(mail.labels), [])
                const uniqueLabels = [...new Set([...dupLabels])]
                this.criterias.labels = uniqueLabels
            })
    },
    data() {
        return {
            mails: null,
            user: mailService.getUser(),
            criterias: { labels: [] },
        }
    },
    methods: {
        filter(filterBy) {
            this.criterias = filterBy
        },
        updatedMailList() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                })
        }
    },
    computed: {
        mailsToShow() {
            const regex = new RegExp(this.criterias.txt, 'i')
            var mails = this.mails.filter(mail => regex.test(mail.subject))
            return mails
        },
    },
    components: {
        mailList,
        mailAside,
        mailFilter
    }

}
