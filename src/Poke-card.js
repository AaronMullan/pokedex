import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        const pokemon = this.props.pokemon;
        return `
        <div class="poke-box">
                <img src="${pokemon.url_image}" alt="${capitalize(pokemon.pokemon)}">
                <h2 class="pokemon">Venusaur</h2>
                <div id="poke-type">
                    <div class="type-1">Normal</div>
                    <div class="type-2">Flying</div>
                </div>
            </div>
        `;
    }
}

export default PokeCard;
