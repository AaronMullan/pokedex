import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        return /*html*/`

        <header>
        <div class="header">
            <a href="#default" class="logo">Pokedex</a>
        </div> 
    </header>
    `;
    }
}

export default Header;