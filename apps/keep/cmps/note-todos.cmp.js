export default {
    props:['info'],
    emits:['toggle'],
    name:"todos",
    template:`
    <div className="todos-list" v-for="todo in info.todos">
        <input @click.stop type="checkbox" id="checkbox" :checked="todo.doneAt" @change="toggle(todo)" />
        <label :class="{checked:todo.doneAt}">{{ todo.txt }}</label>
    </div>
    `,
    data(){
        return {
            checkedNames: []
        }
    },
    methods:{
        toggle(todo){
            todo.doneAt = todo.doneAt ? null : Date.now()
            console.log(todo);
            this.$emit('toggle')
        }
    }
}