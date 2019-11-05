import Component from '../Component.js/index.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search');
        const typeRadios = form.querySelectorAll('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';

            const type = searchParams.get('type_1');
            if (type) {
                typeRadios.forEach(typeRadio => {
                    typeRadio.checked = typeRadio.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.delete('pokemon');
            searchParams.delete('type_1');
            searchParams.delete('hp');
            searchParams.set(formData.get('type'), formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="options">
                <label for="search">
                    Search:
                </label>
                <p>
                    <input id="search" name="search">
                </p>
                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="pokemon" checked>
                        Name
                    </label>
                    <label>
                        <input type="radio" name="type" value="type_1">
                        Type
                    </label>
                    <label>
                        <input type="radio" name="type" value="hp">
                        HP
                    </label>
                </fieldset>
                <p>
                    <button>Search 🔍</button>
                </p>
            </form>
        `;
    }
}

export default SearchOptions;