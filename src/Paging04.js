import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`
            <p class="paging">
                <button class="prev" disabled>◀</button>
                <span class="page-count">Page 1 of 5</span>
                <button class="next">▶</button>
            </p>
        `;
    }
}

export default Paging;