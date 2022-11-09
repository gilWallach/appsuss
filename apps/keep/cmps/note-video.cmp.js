export default {
    emits: ['toggle'],
    props: ['info'],
    name: 'note-video',
    template: `
    <iframe 
    :src="info.url">
    </iframe>
    `
}