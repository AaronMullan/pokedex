import Component from '../Component.js/index.js';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import PokeList from './PokeList.js';
import { getPokemon } from '../services/pokemon-api.js';


class PokedexApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.list-section');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemons: [] });
        listSection.appendChild(pokeList.renderDOM());

        const pokemons = await getPokemon();
        const results = pokemons.results;

        pokeList.update({ pokemons: results });
    }

    renderHTML() {
        return /*html*/`
            <div class="page-content">
            
                <!-- header goes here -->
                
                <main>
                    <section class="options-section">
                        <!-- search options go here -->
                    </section>
                        
                    <section class="list-section">
                        <!-- paging goes here -->
 

                        <!-- poke-list goes here -->        

                    </section>
                </main>
            </div>
        `;
    }
}

export default PokedexApp;