import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        return`
        <div class="poke-box">
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="venusaur">
                <h2 class="pokemon">Venusaur</h2>
                <div id="poke-type">
                    <div class="type-1">Normal</div>
                    <div class="type-2">Flying</div>
                </div>
            </div>`;
    }
    }
    export default PokeCard;
