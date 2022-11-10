// no template on
export default {
    props: ['criterias', 'mails',],
    template: `
    <ul>
        <a href="#"><li>Inbox</li></a>
        <a href="#"><li>Starred</li></a>
        <a href="#"><li>Read <span>{{ readMails }}</span></li></a>
        <a href="#"><li>Sent</li></a>
        <a href="#"><li>Drafts</li></a>
        <a href="#"><li>Trash</li></a>
    </ul>
    <h4>Labels</h4>
    <ul>
        <a v-for="label in criterias.lables" href="#"><li>{{label}}</li></a>
    </ul>
    `,
    data() {
        return {
            readMails: this.readMailsCount()
        }
    },
    methods: {
        readMailsCount(){
            let counter = 0
            this.mails.map(mail => {
                if (mail.isRead) counter++
            })
            console.log(counter)
            return counter
        }
    },
    computed: {

    }
}