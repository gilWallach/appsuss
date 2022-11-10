// ? isRead formatting
import { mailService } from '../services/mail.service.js'

export default {
    emits: ['deleted'],
    props: ['mail'],
    template: `
        <!-- <td><input type="checkbox" name="isSelected"></td> -->
        <td class="starred"><i class="fa fa-thin fa-star"></i></td>
        <router-link @toggleIsRead="toggleIsRead" class="flex button" :to="'/mail/' + mail.id" >
            <td class="from"><span>{{ fromFormat }}</span></td>
            <td class="subject"><span>{{ mail.subject }}</span></td>   
            <td class><span>{{ sentAtFormat }}</span></td>
            <td class="actions">
                <button @click.stop="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <button @click.stop="toggleIsRead"
                        class="isRead-btn" 
                        title="mark as unread">
                        <i :class="isReadStyle" aria-hidden="true"></i>
                </button>
            </td>
        </router-link>
    `,
        methods: {
            deleteMail() {
                mailService.deleteMail(this.mail.id)
                .then(() => {
                    this.$emit('deleted')
                }
                )
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
        isReadStyle(){
            return {
                'fa fa-envelope-open-o': this.mail.isRead,
                'fa fa-envelope-o': !this.mail.isRead
              }
        }
    }
}