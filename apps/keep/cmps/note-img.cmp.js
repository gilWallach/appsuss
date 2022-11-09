export default {
    emits:['toggle'],
    props:['info'],
    template:`
    <img :src="info.url" :alt="info.title" />
    `
}