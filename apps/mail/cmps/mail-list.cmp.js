// ? add id to is Selected checkbox
// ? FA

import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
        <section class="mail-list-container">
            <table class="mail-list">
                <tr v-for="mail in mails" key="mail.id">
                    <mail-preview :mail="mail" />
                </tr>
            </table>
        </section>    
    `,
    methods: {

    },
    components: {
        mailPreview,
    }
}