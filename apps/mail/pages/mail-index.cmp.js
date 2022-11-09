// list cmp
// filter cmp watch url changes (queryParams) emit to mail-index update mailsToShow for list
import { mailService } from '../services/mail.service.js'

import mailList from '../cmps/mail-list.cmp.js'

export default {
    template:`
    <section class="mail-index">
        <mail-list 
        :mails="mailsToShow"/>
    </section>
    `,
    created(){
        mailService.query()
        .then(mails => {
            this.mails = mails
        })
    },
    data(){
        return {
            mails: null
        }
    },

    computed: {
        mailsToShow(){
            return this.mails
        }
    },
    components: {
        mailList
    }

}
