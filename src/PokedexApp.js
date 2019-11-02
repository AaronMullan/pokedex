import Component from '../Component.js';
import Header from './Header.js';
import Options from './Options.js';
import PokeList from './PokeList.js';
import { getPokemon } from '../services/pokemon-api.js';



class PokedexApp extends Component {

    async onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const response = await getPokemon();
        const pokemen = response.results;
        
        const props = { pokemen };

        const pokeList = new PokeList(props);
        const pokeListDOM = pokeList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokeListDOM);
        
        pokeList.update({ pokemen });

        const options = new Options();
        const optionsDOM = options.renderDOM();
        dom.prepend(optionsDOM);
    }

    renderHTML() {
        return /*html*/ `
    
        <div>

            <!--Header goes here  -->

            <main>
                <section class="options-section">
                <!--Options/Filter goes here-->
                </section>
                <section class="list-section">
                <!--Card gallery goes here-->
                </section>

            </main>

        </div>
        `;
    }

}

export default PokedexApp;