import HomeApp from './HomeApp.js.js';

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);