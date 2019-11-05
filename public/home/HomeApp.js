import Component from '../Component.js';
import Header from '../src/Header.js';

class HomeApp extends Component {
    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    renderHTML(){
        return /*html*/`
        <div id="container">
            <!-- header goes here -->
            <main> 
                <a href="pokedex.html" ><img src="../images/pokemon-logo-smaller.svg" class="animated flipInX"  alt="POKEMON LOGO"></a>
            </main>
        </div>
        `;
    }
}
export default HomeApp;
