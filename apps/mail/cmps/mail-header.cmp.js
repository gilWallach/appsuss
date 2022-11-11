export default {
    emits:['aside-toggle'],
    props: ['type'],
    template: `
    <section class="header-sec flex align-center">
        <div class="left flex align-center">
            <i v-if="isApp"
               @click="toggleAside" 
                class="fa fa-bars burger btn" aria-hidden="true"></i>
                <img :src="setLogo" :class="setClass" alt="Gmail-Logo" />
                <h2 :class="{apssus: !isApp}">{{setHeader}}</h2>
                <!-- <router-link :to="setNavigation">{{setHeader}}</router-link> -->
        </div>
        <div class="middle flex">
            <input v-if="isApp"
                    @input="searchByTxt"
                    type="search" 
                    :placeholder="setPlaceholder"
                    v-model="input"/>
        </div>
        <div class="right flex">
            <img @click="isShown= !isShown" class="menu btn" src="assets/img/icons/icons-circled-menu.png" alt="icons-circled-menu" />        
            <img src="assets/img/icons/user-icon.png" alt="user-icon.png" />
            <nav class="main-nav" :class="{shown:isShown}">
                <router-link @click="isShown= !isShown" to="/mail" title="Go to mails"><img class="mail-logo" src="assets/img/icons/Gmail-Logo.png" alt="" /></router-link>
                <router-link @click="isShown= !isShown" to="/keep" title="Go to keep"><img class="keep-logo" src="assets/img/icons/keep.png" alt="" /></router-link>
                <router-link @click="isShown= !isShown" to="/about" title="Go to about"><img src="assets/img/icons/info-icon-blue.png" alt="" /></router-link>
                <router-link @click="isShown= !isShown" to="/" title="Go to home"><img src="assets/img/icons/home-icon.png" alt="" /></router-link>
            </nav>
            <!-- Todos: set our icons   -->

        </div>
    </section>
    `,
    data() {
        return {
            input: '',
            isShown: false,
        }
    },
    methods: {
        searchByTxt() {
            this.$router.push({ query: { txt: this.input } })
        },
        toggleAside() {
            this.$emit('aside-toggle')
        }
    },
    computed: {
        pageName() {
            return this.$route.name
        },
        setHeader() {
            if (this.pageName === 'keep') return 'Keep'
            else if (this.pageName === 'mail') return 'Gmail'
            else return 'Appsus'
        },
        setLogo() {
            if (this.pageName === 'keep') return 'assets/img/icons/keep.png'
            else if (this.pageName === 'mail') return 'assets/img/icons/Gmail-Logo.png'
            else return 'assets/img/icons/Appsus-logo.png'
        },
        setClass() {
            if (this.pageName === 'mail') return 'mail-logo'
        },
        setPlaceholder() {
            return (this.pageName === 'keep') ? 'Search note' : 'Search mail'
        },
        isApp() {
            return this.pageName === 'keep' || this.pageName === 'mail'
        }
        // setNavigation() {
        //     if (this.pageName === 'keep') return '/mail'
        //     else if (this.pageName === 'mail') return '/keep'
        //     else return 
        // }
    }

}