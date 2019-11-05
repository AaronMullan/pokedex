import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <form class="search">
                    <p>Search For:</p>
                    <input name="search">

                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="movies" checked>
                        Name
                    </label>
                    <label>
                        <input type="radio" name="type" value="series">
                        Type
                    </label>
                    <label>
                        <input type="radio" name="type" value="episode">
                        HP
                    </label>
                </fieldset>

                <button>Search! 🔍</button>
                </form>
            </div>
        `;
    }
}

export default SearchOptions;