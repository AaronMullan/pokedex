import PokedexApp from './PokedexApp.js';

const app = new PokedexApp();
const dom = app.renderDOM();
document.body.prepend(dom);