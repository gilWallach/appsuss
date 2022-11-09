export default {
    emits:['toggle'],
    props:['info'],
    template:`
    <p>{{info.txt}}</p>
    `,
}