import Component from '../Component.js';
import PokeInfo from './Poke-info.js';


class Options extends Component {
    renderHTML() {
        return /*html*/ `
        
        <div class="options-section">
            <!-- poke-info goes here -->
            POKE INFO
        <div>
        
        `;
    }

    // onRender(dom) {
    //     const pokemen = this.props.pokemen;

    //     pokemen.forEach(pokemon => {
    //         const props = { pokemon };
    //         const pokeInfo = new PokeInfo(props);
    //         const pokeInfoDOM = pokeInfo.renderDOM();
    //         dom.appendChild(pokeInfoDOM);
    //     });
    // }
}

export default Options;