const StringComparison = (() => {
    const RESULT_ELEMENT_ID = 'string_comparison_result';

    class StringComparisonContainer {
        constructor() {
            this._str1 = '';
            this._str2 = '';
        }

        _hanldeChange = (event) => {
            this[event.target.name] = event.target.value;
            this._checkString();
        }

        _checkString = () => {
            const resultElement = document.getElementById(RESULT_ELEMENT_ID);
            resultElement.innerText = this._str1.length === this._str2.length;
        }

        create = () => {
            const container = document.createElement('div');
            container.addEventListener('input', this._hanldeChange);

            const str1Input = document.createElement('input');
            str1Input.type = 'text';
            str1Input.name = '_str1';

            const str2Input = document.createElement('input');
            str2Input.type = 'text';
            str2Input.name = '_str2';

            const resultElement = document.createElement('div');
            resultElement.id = RESULT_ELEMENT_ID;
            resultElement.innerText = this._str1.length === this._str2.length;

            const descriptionRow = _factory.createRow({size: 6, element: 'Сравнение количества символов'});

            const str1Row = _factory.createRow(
                {size: 2, element: 'Строка 1'},
                {size: 4, element: str1Input},
            );

            const str2Row = _factory.createRow(
                {size: 2, element: 'Строка 2'},
                {size: 4, element: str2Input},
            );

            const resultRow = _factory.createRow(
                {size: 2, element: 'Результат'},
                {size: 2, element: resultElement},
            );

            container.appendChild(descriptionRow);
            container.appendChild(str1Row);
            container.appendChild(str2Row);
            container.appendChild(resultRow);

            return container;
        }
    }

    return StringComparisonContainer;
})();