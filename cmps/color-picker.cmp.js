export default {
    emits: ['color-changed'],
    props: ['isOpen'],
    template: `
    <div className="colors-container">
        <section class="color-options flex align-center" :class="{open:isOpen}">
            <div className="single-color" v-for="color in colors" :style="{backgroundColor:color}" @click.stop="onSetColor(color)"></div>
        </section>
        <!-- <div className="full-screen" @click="closeColors"></div> -->
    </div>
        `,
    data() {
        return {
            colors: ['#ffeaa7', '#fab1a0', '#81ecec', '#74b9ff', '#a29bfe', '#dfe6e9', '#b2bec3']
        }
    },
    methods: {
        onSetColor(color) {
            console.log(color);
            this.$emit('color-changed', color)
        },
        closeColors(){
            console.log('closing');
        }
    },
    computed: {
        setClass() {
            return { open: isOpen }
        }
    }
}