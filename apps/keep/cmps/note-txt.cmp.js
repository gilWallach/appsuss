export default {
    emits:['toggle'],
    props:['info'],
    template:`
    <div className="text-container">
        <textarea ref="textarea" v-model="info.txt" v-on:input="resize" @focus="resize" @input="resize"
        @change="resize" @keyup="resize"></textarea>
    </div>
    `,
    mounted(){
        this.resize()
    },
    methods:{
          resize() {
            const { textarea } = this.$refs;
            textarea.style.height = 'auto'
            textarea.style.height = textarea.scrollHeight + 'px';
            textarea.style.overflow= 'hidden'
          }
    },
}