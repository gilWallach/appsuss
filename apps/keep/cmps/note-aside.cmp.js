export default {
    name:"note-aside",
    template:`
    <section className="aside">
        <ul class="clean-list">
            <li><router-link :to="{ query: { status: 'notes' } }"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>Notes</router-link></li>
            <li><router-link :to="{ query: { status: 'reminders' } }"><span><i class="fa fa-bell-o" aria-hidden="true"></i></span>Reminders</router-link></li>
            <li><router-link :to="{ query: { status: 'trash' } }"><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>Bin</router-link></li>
            <li><router-link :to="{ query: { status: 'archive' } }"><span><i class="fa fa-archive"></i></span>Archive</router-link></li>
        </ul>
    </section>
    `
}