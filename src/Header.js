import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        return /*html*/`

        <header>
        <div class="header">
            <a href="#default" class="logo">Pokedex</a>
            <div class="filter-container">
                <div class="filter-label">Filter</div>
                <select name="filter" id="poke-filter">
                   <!-- filter values here -->
                </select>
            </div>
            <div class="search-icon"><img src="./assets/ui.png" alt="search-icon">
            </div>
        </div> 
    </header>
    `;
    }
}

export default Header;