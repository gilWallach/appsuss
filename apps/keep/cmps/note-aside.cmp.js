export default {
    emits:['close-menu'],
    name:"note-aside",
    template:`
    <section className="aside">
        <ul class="clean-list">
            <li @click="$emit('close-menu')" :class="{ 'IS-ACTIVATED': $route.query.status === 'notes' || ($route.name === 'keep' && !$route.query.status) }"><router-link :to="{ query: { status: 'notes' } }"><span><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span><div class="aside-txt">Notes</div></router-link></li>
            <li @click="$emit('close-menu')" :class="{ 'IS-ACTIVATED': $route.query.status === 'reminders' }"><router-link :to="{ query: { status: 'reminders' } }"><span><i class="fa fa-bell-o" aria-hidden="true"></i></span><div class="aside-txt">Reminders</div></router-link></li>
            <li @click="$emit('close-menu')" :class="{ 'IS-ACTIVATED': $route.query.status === 'archive' }"><router-link :to="{ query: { status: 'archive' } }"><span><i class="fa fa-archive"></i></span><div class="aside-txt">Archive</div></router-link></li>
            <li @click="$emit('close-menu')" :class="{ 'IS-ACTIVATED': $route.query.status === 'trash' }"><router-link :to="{ query: { status: 'trash' } }"><span><i class="fa fa-trash-o" aria-hidden="true"></i></span><div class="aside-txt">Bin</div></router-link></li>
        </ul>
    </section>
    `,
}