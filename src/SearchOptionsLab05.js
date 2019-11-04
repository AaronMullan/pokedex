import Component from '../Component.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search');
        const typeRadios = form.querySelectorAll('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';

            const type = searchParams.get('/types');
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

            searchParams.set('types', formData.get('type'));
            searchParams.set('s', formData.get('search'));
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
                        <input type="radio" name="type" value="name" checked>
                        Name
                    </label>
                    <label>
                        <input type="radio" name="type" value="type">
                        Type
                    </label>
                    <label>
                        <input type="radio" name="type" value="attack">
                        Attack
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