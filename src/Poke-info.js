import Component from '../Component.js';

class PokeInfo extends Component {
    renderHTML() {
        return `
        <div class="poke-info">
                <h2 class="pokemon">Venusaur</h2>
                <div id="poke-info">
                    <div class="height">Height:</div> 
                    <div class="weight">Weight:</div>
                    <div class="ability">Ability:</div> 
                </div>
        </div>
        `;
    }
}
export default PokeInfo;