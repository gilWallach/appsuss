// ? isRead formatting
import { mailService } from '../services/mail.service.js'

export default {
    emits: ['update'],
    props: ['mail'],
    template: `
        <!-- <td><input type="checkbox" name="isSelected"></td> -->
        <div @toggleIsRead="toggleIsRead" class="flex button preview-contaoner" @click="$router.push('/mail/' + mail.id)" >
            <td class="starred"><i class="fa fa-thin fa-star"></i></td>
            <td class="from"><span>{{ fromFormat }}</span></td>
            <td class="subject"><span>{{ subjectFormat }}</span></td>   
            <td class="time"><span>{{ sentAtFormat }}</span>
            </td>
            <span class="actions">
                <button @click.stop="deleteMail" class="delete-btn" title="delete mail"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <button @click.stop="toggleIsRead"
                        class="isRead-btn" 
                        title="mark as unread">
                        <i :class="isReadStyle" aria-hidden="true"></i>
                </button>
            </span>
        </div>
    `,
    data(){
        return {
            maxLength: 50,
        }
    },
    methods: {
        deleteMail() {
            this.mail.status = 'trash'
            mailService.save(this.mail)
            .then(() => {
                this.$emit('update')
            })
        },
        toggleIsRead() {
            this.mail.isRead = !this.mail.isRead
        },
    },
    computed: {
        fromFormat() {
            const { from } = this.mail
            return from.substring(0, from.indexOf('@'));
        },
        sentAtFormat() {
            return new Date(this.mail.sentAt).toString().slice(0, 10)
        },
        subjectFormat(){
            if(this.mail.subject.length > this.maxLength) {
                return this.mail.subject.slice(0, this.maxLength) + '...'
            }
            return this.mail.subject
        },
        isReadStyle() {
            return {
                'fa fa-envelope-open-o': this.mail.isRead,
                'fa fa-envelope-o': !this.mail.isRead
            }
        }
    }
}