// no template on
export default {
    props: ['criterias'],
    template:`
    <ul>
        <a v-for="criteria in criterias" href="#">
            {{ criteria }}
        </a>
    </ul>
    `,
    method:{
        getCriterisKeys(){
            
        }
    }
}