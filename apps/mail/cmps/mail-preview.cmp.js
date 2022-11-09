// ? isRead formatting
// class bold to tr

export default {
    props: ['mail'],
    template: `
        <td class="checkbox"><input type="checkbox" id="isSelected" name="isSelected"></td>
        <td class="starred"><i class="fa fa-thin fa-star"></i></td>
        <td class="from"><span>{{ fromFormat }}</span></td>
        <td class="subject"><span>{{ mail.subject }}</span></td>   
        <td class><span>{{ sentAtFormat }}</span></td>   
    `,
    data(){
        return {

        }
    },
    methods: {

    },
    computed: {
        fromFormat(){
            const { from } = this.mail
            return from.substring(0, from.indexOf('@')); 
        },
        sentAtFormat(){
            return new Date(this.mail.sentAt).toTimeString().slice(0, 5)
        },
    }
}