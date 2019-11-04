import Component from '../Component.js';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import PokeList from './PokeList.js';
import { getPokemon } from '../services/pokemon-api.js';

class PokedexApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());
        
        const listSection = dom.querySelector('.list-section');
        const paging = new Paging({ totalResults: 0 });
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemons: [] });
        listSection.appendChild(pokeList.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.Search;
            const totalResults = response.totalResults;
            pokeList.update({ pokemon: pokemon });
            paging.update({ totalResults: totalResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <section class="options-section">
                        <!-- options go here -->
                    </section>
                        
                    <section class="list-section">
                        <!-- paging goes here -->
 
                        <!-- quote list goes here -->        
                    </section>
                </main>
            </div>
        `;
    }
}

export default PokedexApp;