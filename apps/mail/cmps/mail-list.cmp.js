// ? add id to is Selected checkbox

import mailPreview from '../cmps/mail-preview.cmp.js'

// wrap tr with <a>, router link with stop proppagation
export default {
    props: ['mails'],
    template: `
        <section class="mail-list-container flex">
            <div className="mail-list-table">

                <table class="mail-list"> 
                        <tr class="list-item" v-for="mail in mails" 
                            :class="{ bold: !mail.isRead }" 
                            key="mail.id">
                                <mail-preview :mail="mail" />
                        </tr>        
                </table>
            </div>
        </section>    
    `,
    methods: {

    },
    components: {
        mailPreview,
    }
}