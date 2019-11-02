import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        const pokemon = this.props.pokemon;
        return `
        <div class="poke-box" style="background-color:${pokemon.color_1}" >
                <img src="${pokemon.url_image}" alt="${capitalize(pokemon.pokemon)}" <div class="poke-box" style="background-color:${pokemon.color_2}" >
                <h2 class="pokemon"> ${capitalize(pokemon.pokemon)} </h2>
                <h2>HP: ${pokemon.hp}</h2>
                <div id="poke-type">
                    <div class="type-1">${capitalize(pokemon.type_1)}</div>
                    <div class="type-2">${capitalize(pokemon.type_2)}</div>
                </div>
            </div>
        `;
    }
}

export default PokeCard;
