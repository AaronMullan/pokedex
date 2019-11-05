import Component from '../Component.js';

class PokeItem extends Component {
    
    renderHTML() {
        const pokemon = this.props.pokemon;
        
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        return /*html*/`
        <div class="poke-item"}>
            <h2 class="pokemon">${capitalize(pokemon.pokemon)}</h2>
            <img src="${pokemon.url_image}" alt="${capitalize(pokemon.pokemon)}" style="background-color:${pokemon.color_1}">
            <div class="hp">HP: ${pokemon.hp}</div>
            <div class="type-container">
                <div class="type-1">${capitalize(pokemon.type_1)}</div>
                <div class="type-2">${capitalize(pokemon.type_2)}</div>
            </div>
        </div>
        `;
    }
}

export default PokeItem;
