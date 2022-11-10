// make actions a seperate cmp
// add labels
// add

import { mailService } from '../services/mail.service.js'

import mailActions from '../cmps/mail-actions.cmp.js'

export default {
    template: `
    <section v-if="mail" class="details">
        <mail-actions :mail="mail" />
    <div className="details-header">
        <h2>{{ mail.subject }}</h2>
    </div>
    <div className="details-content">
        <div className="details-from"> {{ mail.from }} </div>
        <div className="details-from"> {{ sentToFormat }} </div>
        <div className="details-from"> {{ sentAtFormat }} </div>
        <div className="details-content"> {{ mail.body }} </div>
    </div>
    </section>
    `,
    created() {
        this.loadMail()
    },
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        loadMail() {
            mailService.get(this.mailId)
                .then(mail => {
                    this.mail = mail
                    this.mail.isRead = true
                })
        },
    },
    computed: {
        mailId() {
            return this.$route.params.id
        },
        sentAtFormat() {
            return new Date(this.mail.sentAt).toString().slice(0, 10)
        },
        sentToFormat() {
            const { to } = this.mail
            if (to === mailService.getUser().mail) return 'me'
            return to.substring(0, to.indexOf('@'))
        }
    },
    components: {
        mailActions,
    }
}