// ? isRead formatting
// class bold to tr

export default {
    props: ['mail'],
    template: `
        <td><input type="checkbox" id="isSelected" name="isSelected"></td>
        <td><i class="fa-solid fa-star"></i></td>
        <td><span :class="{ bold: mail.isRead }">{{ mail.from }}</span></td>
        <td><span :class="{ bold: mail.isRead }">{{ mail.subject }}</span></td>   
        <td><span :class="{ bold: mail.isRead }">{{ sentAtFormat }}</span></td>   
    `,
    data(){
        return {
        }
    },
    methods: {

    },
    computed: {
        sentAtFormat(){
            return new Date(this.mail.sentAt).toTimeString().slice(0, 5)
        }
    }
}