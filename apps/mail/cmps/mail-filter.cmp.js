// no template on
import { mailService } from "../services/mail.service.js"

export default {
    emits: ['filter'],
    template: `
    `,
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
            this.$emit('filter',{...this.filterBy})
        }
    }
}