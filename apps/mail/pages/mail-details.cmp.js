// make actions a seperate cmp
// add labels
// add

import { mailService } from '../services/mail.service.js'

export default {
    template: `
    <div className="detail-actions">
        <button @click="backToList" class="back-btn" title="back to inbox"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button @click="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        <button @click="toggleIsRead" class="isRead-btn" title="mark as unread"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
    </div>
    <div className="details-header">
        <h2>{{ mail.subject }}</h2>
    </div>
    <div className="details-content">
        <div className="details-from"> {{ mail.from }} </div>
        <div className="details-from"> {{ sentToFormat }} </div>
        <div className="details-from"> {{ sentAtFormat }} </div>
        <div className="details-content"> {{ mail.body }} </div>
    </div>
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
        deleteMail() {
            mailService.deleteMail(this.mail.id)
                .then(() => this.$router.push('/mail'))
        },
        backToList() {
            mailService.save(this.mail)
                .then(() => this.$router.push('/mail'))
        },
        toggleIsRead() {
            this.mail.isRead = !this.mail.isRead
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
    }
}