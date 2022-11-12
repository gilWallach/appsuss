// no template on
import { mailService } from "../services/mail.service.js"

export default {
    emits: ['filter'],
    data() {
        return {
            filterBy: mailService.getEmptyCriteria()
        }
    },
    computed: {
        urlChange(){
            return this.$route.query
        },
    },
    watch:{
        urlChange(){
            this.filterBy.txt = this.$route.query.txt
            this.filterBy.isRead = this.$route.query.isRead
            this.filterBy.status = this.$route.query.status
            this.filterBy.currLabel = this.$route.query.label
            this.$emit('filter',{...this.filterBy})
        }
    }
}