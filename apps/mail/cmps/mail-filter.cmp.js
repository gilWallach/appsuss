// no template on
import { mailService } from "../services/mail.service.js"

export default {
    emits: ['filter'],
    props: ['criterias', 'mails',],
    template: `
    <ul>
        <a href="#"><li>Inbox</li></a>
        <a href="#"><li>Starred</li></a>
        <a href="#" v-if="mails"><li>Read <span>{{ readMailsCount }}</span></li></a>
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
            filterBy: mailService.getEmptyCriteria()
        }
    },
    methods: {

    },
    computed: {
        urlChange(){
            return this.$route.query
        },
        readMailsCount() {
            let counter = 0
            this.mails.map(mail => {
                if (mail.isRead) counter++
            })
            return  counter
        }
    },
    watch:{
        urlChange(){
            this.filterBy.txt = this.$route.query.txt
            this.$emit('filter',{...this.filterBy})
        }
    }
}