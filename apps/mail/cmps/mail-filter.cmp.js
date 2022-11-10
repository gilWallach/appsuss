// no template on
import { mailService } from "../services/mail.service.js"

export default {
    emits:['filter'],
    props: ['criterias'],
    template:`
    <ul>
        <a href="#"><li>Inbox</li></a>
        <a href="#"><li>Starred</li></a>
        <a href="#"><li>Read</li></a>
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
    created(){
        console.log(this.filterBy);
    },
    methods: {

    },
    computed: {
        urlChange(){
            return this.$route.query
        }
    },
    watch:{
        urlChange(){
            this.filterBy.txt = this.$route.query.txt
            this.$emit('filter',{...this.filterBy})
        }
    }
}