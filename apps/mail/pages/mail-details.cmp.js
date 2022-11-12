// make actions a seperate cmp
// add labels
// add

import { mailService } from '../services/mail.service.js'

// import mailActions from '../cmps/mail-actions.cmp.js'

export default {
    template: `
    <section v-if="mail" class="details">
        <div className="header-container">
    <div className="detail-actions">
        <button @click="backToList" class="back-btn" title="back to inbox"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button @click="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        <button @click="toggleIsRead" class="isRead-btn" title="mark as unread"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
    </div>
     <h2>{{ mail.subject }}</h2>
    </div>
    <div className="details-info flex">
        <img src="assets/img/icons/user-icon.png" alt="user-icon.png" />
        <div class="details-from-to-container flex">
            <div>
                <p className="details-from"> {{ fromFormated }}</p>
                <p className="details-to"> {{ sentToFormat }} </p>
            </div>
            <p className="details-time"> {{ sentAtFormat }} </p>
        </div>
    </div>
    <div className="details-content"> {{ mail.body }} </div>
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
        deleteMail() {            
            mailService.deleteMail(this.mail.id)
            .then(() => {
                this.$router.push('/mail')
            })
        },
        toggleIsRead() {
            this.mail.isRead = !this.mail.isRead
        },
        backToList(){
            mailService.save(this.mail)
                .then(() => {
                    this.$router.push('/mail')                    
                })
        }
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
        },
        fromFormated() {
            const { from } = this.mail
            return from.substring(0, from.indexOf('@'))
        }
    },
}