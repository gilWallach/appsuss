export default {
    template: `
    <section class="header-sec flex">
        <div class="left flex align-center">
            <i class="fa fa-bars burger" aria-hidden="true"></i>
                <img src="../../../assets/img/icons/Gmail-Logo.png" alt="Gmail-Logo" />
                <h2>Gmail</h2>
        </div>
        <div class="middle flex">
            <input 
                    @input="filter"
                    type="text" 
                    placeholder="Search mail">
        </div>
        <div class="right flex">
            <img clas="menu" src="../../../assets/img/icons/icons-circled-menu.png" alt="icons-circled-menu" />        
            <img src="../../../assets/img/icons/user-icon.png" alt="user-icon.png" />        

        </div>
    </section>
    `
}