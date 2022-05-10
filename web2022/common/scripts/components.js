const AppComponents = (() => {
    class Select {
        _id;
        _options;
        _onChange;

        constructor(id, options, onChange) {
            this._id = id;
            this._options = options;
            this._onChange = onChange;
        }

        render() {
            const element = document.getElementById(this._id);

            const label = document.createElement('div');
            label.className = 'select-label';
            label.innerText = this._options[0].label;

            const dropdown = document.createElement('div');
            dropdown.style.display = 'none';
            dropdown.className = 'select-dropdown';

            this._options.map((data) => {
                const item = document.createElement('div');
                item.innerText = data.label;
                item.className = 'select-dropdown-item';
                item.dataset.value = data.value;
                item.dataset.label = data.label;
                item.onclick = this._handleClicItem;
                dropdown.appendChild(item);
            });

            element.appendChild(label);
            element.appendChild(dropdown);
            element.onclick = this._handleClickSelect;

        }

        _handleClickSelect = () => {
            const dropdown = document.querySelector(`#${this._id} .select-dropdown`);
            dropdown.style.display = dropdown.style.display ? '' : 'none';
        }

        _handleClicItem = (e) => {
            const label = document.querySelector(`#${this._id} .select-label`);
            label.innerText = e.currentTarget.dataset.label;
            this._onChange(e.currentTarget.dataset.value);
        }

        _handleClicOutside = () => {
            
        }

    }

    return {
        Select,
    };
})();
