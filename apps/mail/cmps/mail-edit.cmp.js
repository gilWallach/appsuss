// edit & add - optional id
import { mailService } from "../services/mail.service.js"

export default {
    template: `
    <section class="mail-edit">
        <h1>hello mail edit</h1>
        <!-- <form @submit.prevent="send">
            <div>New Message</div>
            <input ref="to" type="text" v-model="mailToEdit.to" placeholder="To"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="body" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
        </form> -->
    </section>
    `,
    // data() {
    //     return {
    //         mailToEdit: mailService.getEmptyMail()
    //     }
    // },
    // created() {
    //     const mailId = this.$route.params.id
    //     if (mailId) {
    //         this.mailToEdit = mailService.get(mailId)
    //             .then(mail => this.mailToEdit = mail)
    //     }
    // },
    // mounted(){
    //     this.$refs.to.focus()
    // },
}