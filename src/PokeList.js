import Component from '../Component.js';
import PokeCard from '../src/Poke-card.js';


class PokeList extends Component {
    renderHTML() {
        return /*html*/ `
        
        <ul class="poke-grid">
            <!-- poke-card goes here -->
        </ul>
        
        `;
    }

    onRender(dom) {
        const pokemen = this.props.pokemen;

        pokemen.forEach(pokemon => {
            const props = { pokemon };
            const pokeCard = new PokeCard(props);
            const pokeCardDOM = pokeCard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });
    }
}

export default PokeList;