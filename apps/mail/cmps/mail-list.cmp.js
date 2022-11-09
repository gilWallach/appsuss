// ? add id to is Selected checkbox

import mailAside from '../cmps/mail-aside.cmp.js'
import mailPreview from '../cmps/mail-preview.cmp.js'

// wrap tr with <a>, router link with stop proppagation
export default {
    props: ['mails', 'criteria'],
    template: `
        <section class="mail-list-container flex">
            <mail-aside :criteria="criteria" />
            <table class="mail-list"> 
                <tr v-for="mail in mails" 
                    :class="{ bold: mail.isRead }" 
                    key="mail.id">
                    <mail-preview :mail="mail" />
                </tr>
            </table>
        </section>    
    `,
    methods: {

    },
    components: {
        mailPreview,
        mailAside,
    }
}