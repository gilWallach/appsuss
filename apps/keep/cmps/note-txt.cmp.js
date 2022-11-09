export default {
    emits:['toggle'],
    props:['info'],
    template:`
    <h2 v-if="info.title">{{info.title}}</h2>
    <p>{{info.txt}}</p>
    `,
}