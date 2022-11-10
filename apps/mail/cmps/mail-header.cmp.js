export default {
    props: ['type'],
    template: `
    <section class="header-sec flex align-center">
        <div class="left flex align-center">
            <i class="fa fa-bars burger" aria-hidden="true"></i>
                <img :src="setLogo" :class="setClass" alt="Gmail-Logo" />
                <h2><router-link :to="setNavigation">{{setHeader}}</router-link></h2>
        </div>
        <div class="middle flex">
            <input 
                    @input="searchByTxt"
                    type="search" 
                    :placeholder="setPlaceholder"
                    v-model="input"/>
        </div>
        <div class="right flex">
            <img @click="isShown= !isShown" class="menu btn" src="assets/img/icons/icons-circled-menu.png" alt="icons-circled-menu" />        
            <img src="assets/img/icons/user-icon.png" alt="user-icon.png" />
            <nav class="main-nav" :class="{shown:isShown}">
                <router-link v-if="this.type" to="/mail" title="Go to mails"><img src="assets/img/icons/Gmail-Logo.png" alt="" /></router-link>
                <router-link v-else to="/keep" title="Go to keep"><img src="assets/img/icons/keep.png" alt="" /></router-link>
                <router-link to="/about">About</router-link>
            </nav>
            <!-- Todos: set our icons   -->

        </div>
    </section>
    `,
    data() {
        return {
            input: '',
            isShown:false
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
        setPlaceholder() {
            return (this.type) ? 'Search note' : 'Search mail'
        },
        setNavigation() {
            return (this.type) ? '/keep' : '/mail'
        }
    }

}