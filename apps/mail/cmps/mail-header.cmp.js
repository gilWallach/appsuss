export default {
    props: ['type'],
    template: `
    <section class="header-sec flex align-center">
        <div class="left flex align-center">
            <i class="fa fa-bars burger" aria-hidden="true"></i>
                <img :src="setLogo" :class="setClass" alt="Gmail-Logo" />
                <h2>{{setHeader}}</h2>
        </div>
        <div class="middle flex">
            <input 
                    @change="searchByTxt"
                    type="search" 
                    :placeholder="setPlaceholder"
                    v-model="input"/>
        </div>
        <div class="right flex">
            <img clas="menu" src="assets/img/icons/icons-circled-menu.png" alt="icons-circled-menu" />        
            <img src="assets/img/icons/user-icon.png" alt="user-icon.png" />
            <!-- Todos: set our icons   -->

        </div>
    </section>
    `,
    data() {
        return {
            input: ''
        }
    },
    methods: {
        searchByTxt() {
            this.$router.push({ query: { txt: this.input } })
        }
    },
    computed: {
        setHeader() {
            return (this.type) ? 'Keep' : 'Gmail'
        },
        setLogo() {
            return (this.type) ? 'assets/img/icons/keep.png'
                : 'assets/img/icons/Gmail-Logo.png'
        },
        setClass() {
            if (this.type) return 'keep-logo'
        },
        setPlaceholder(){
            return (this.type) ? 'Search note' : 'Search mail'
                }
    }

}