// ? isRead formatting
import { mailService } from '../services/mail.service.js'

export default {
    props: ['mail'],
    template: `
        <td class="checkbox"><input type="checkbox" id="isSelected" name="isSelected"></td>
        <td class="starred"><i class="fa fa-thin fa-star"></i></td>
        <router-link class="flex" :to="'/mail/' + mail.id" class="button">
            <td class="from"><span>{{ fromFormat }}</span></td>
            <td class="subject"><span>{{ mail.subject }}</span></td>   
            <td class><span>{{ sentAtFormat }}</span></td>
            <td class="actions">
                <button @click="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <button @click="toggleIsRead" class="isRead-btn" title="mark as unread"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
            </td>
        </router-link>
    `,
        methods: {
            deleteMail() {
                mailService.deleteMail(this.mail.id)
                    .then(() => this.$router.push('/mail'))
            },
            toggleIsRead() {
                this.mail.isRead = !this.mail.isRead
            },
        },
    computed: {
        fromFormat(){
            const { from } = this.mail
            return from.substring(0, from.indexOf('@')); 
        },
        sentAtFormat(){
            return new Date(this.mail.sentAt).toString().slice(0, 10)
        },
    }
}