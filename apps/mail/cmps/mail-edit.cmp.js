// edit & add - optional id
import { mailService } from "../services/mail.service.js"

export default {
    emits: ['update'],
    template: `
    <section class="mail-edit">
        <form @submit.prevent="send" class="create-form flex">
            <div class="header flex"><p>New Message</p><button @click="close" class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></button></div>
            <input ref="to" v-model="mailToEdit.to" type="text" placeholder="Recipients"/>
            <input type="text" v-model="mailToEdit.subject" placeholder="Subject"/>
            <textarea name="body" v-model="mailToEdit.body" cols="70" rows="25"></textarea>
            <div class="flex align-center">
                <button class="submit-btn" type="submit">Send</button>
                <button class="delete-btn" @click.prevent="deleteMail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </form>
            </div>
    </section>
    `,

    data() {
        return {
            mailToEdit: mailService.getEmptyMail(),
            isOpen: false
        }
    },
    created() {
        const mailId = this.$route.params.id
        if (mailId) {
            this.mailToEdit = mailService.get(mailId)
                .then(mail => this.mailToEdit = mail)
        }
    },
    mounted(){
        this.$refs.to.focus()
    },
    methods: {
        setMailInfo(){
            this.mailToEdit.isRead = true
            this.mailToEdit.sentAt = Date.now()
            this.mailToEdit.from = mailService.getUser().mail
        },
        send(){
            this.setMailInfo()
            this.mailToEdit.status = 'sent'
            mailService.save(this.mailToEdit)
            .then(() => {
                this.$emit('update',this.mailToEdit)
                this.$router.push('/mail')
            })
        },
        close(){
            this.setMailInfo()
            this.mailToEdit.status = 'draft'
            mailService.save(this.mailToEdit)
            .then(() => {
                this.$emit('update',this.mailToEdit)
                this.$router.push('/mail')
            })
        },
        deleteMail(){
            this.setMailInfo()
            this.mailToEdit.status = 'trash'
            mailService.save(this.mailToEdit)
            .then(() => {
                this.$emit('update',this.mailToEdit)
                this.$router.push('/mail')
            })
        }
    }
}