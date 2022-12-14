const { createApp } = Vue

import { router } from './routes.js'

import appFooter from './cmps/app-footer.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import mailHeader from './apps/mail/cmps/mail-header.cmp.js'

const options = {
    template: `
        <section class="main-container">
            <mail-header @aside-toggle="toggleAside"/>
            <section className="apps" :class="{open:isMenuOpen}">
                <router-view @close-menu="isMenuOpen=false" />
            </section>
            <app-footer />
            <user-msg />
        </section>
    `,
    data() {
        return {
            isMenuOpen: true
        }
    },
    methods: {
        toggleAside() {
            this.isMenuOpen = !this.isMenuOpen
        }
    },
    components: {
        appFooter,
        userMsg,
        mailHeader
    },
}

const app = createApp(options)
app.use(router)
app.mount('#app')
