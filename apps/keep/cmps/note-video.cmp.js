export default {
    emits: ['toggle'],
    props: ['info'],
    name: 'note-video',
    template: `
    <iframe 
    :src="formatUrl">
    </iframe>
    `,
    computed:{
        formatUrl(){
           if( this.info.url.includes('youtube')) {
                console.log('thats a youtube video');
                const idIdx = this.info.url.indexOf('v=')
                const id = this.info.url.substring(idIdx+2)
                console.log(id);               
               return `https://www.youtube.com/embed/${id}`
           } else return this.info.url
        }
    }
}