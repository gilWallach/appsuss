import { mailService } from '../services/mail.service.js'

export default {
    props: ['mail'],
    template: `
    <div className="detail-actions">
        <button @click="backToList" class="back-btn" title="back to inbox"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button @click="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        <button @click="toggleIsRead" class="isRead-btn" title="mark as unread"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
    </div>`,
    created(){
        this.mail.isRead = true
    },
    methods: {
        deleteMail() {
            mailService.deleteMail(this.mail.id)
            .then(() => {
                this.$router.push('/mail')
            })
        },
        toggleIsRead() {
            this.mail.isRead = !this.mail.isRead
            // this.$emit('toggleIsRead')
        },
        backToList(){
            this.$router.push('/mail')
        }
    },
}