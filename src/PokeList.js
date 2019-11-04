import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    
    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokeCard = new PokeItem(props);
            const pokeCardDOM = pokeCard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
        <ul class="poke-list">
        </ul>
        `;
    }
}

export default PokeList;