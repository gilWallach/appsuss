// ? add id to is Selected checkbox

import mailPreview from '../cmps/mail-preview.cmp.js'

// wrap tr with <a>, router link with stop proppagation
export default {
    emits: ['update'],
    props: ['mails'],
    template: `
        <section class="mail-list-container flex">
            <div className="mail-list-table">

                <table class="mail-list"> 
                        <tr class="list-item" v-for="mail in mails" 
                            :class="{ read: !mail.isRead }" 
                            key="mail.id">
                                <mail-preview :mail="mail" @update="update"/>
                        </tr>        
                </table>
            </div>
        </section>    
    `,
    methods: {
        update(){
            this.$emit('update')
        }
    },
    components: {
        mailPreview,
    }
}