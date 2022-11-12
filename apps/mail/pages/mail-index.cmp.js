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
        :user="user"
        />
        <mail-list
        v-if="mails" 
        :mails="mailsToShow"
        :criteria="criterias"
        @update="updatedMailList"
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
            criterias: { label: [] },
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
            const currLabel = this.criterias.currLabel
            const isReadFilter = this.criterias.isRead
            const currStatus = this.criterias.status || 'inbox'
            const regex = new RegExp(this.criterias.txt, 'i')
            var mails
            if(currLabel) mails = this.mails.filter(mail => {
                // Object.values(mail.labels).includes(currLabel)
            })
            else if(isReadFilter){
                mails = this.mails.filter(mail => mail.isRead && mail.status === 'inbox')
            }
            else mails = this.mails.filter(mail => regex.test(mail.subject)
                && mail.status === currStatus)
            return mails
        },
    },
    components: {
        mailList,
        mailAside,
        mailFilter
    }

}
