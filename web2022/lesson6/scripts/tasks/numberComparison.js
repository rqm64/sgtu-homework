const NumberComparison = (() => {
    const RESULT_MIN_ELEMENT_ID = 'number_comparison_min_result';
    const RESULT_MAX_ELEMENT_ID = 'number_comparison_max_result';

    class NumberComparisonContainer {
        constructor() {
            this._value = '';
        }

        _hanldeChange = (event) => {
            const value = event.target.value;
            const parsedValue = (value.match(/[\d\s,]+/g) || []).join('');
            event.target.value = parsedValue;
            this._value = parsedValue;
            this._checkNumbers();
        }

        _checkNumbers = () => {
            const numbers = this._value.replace(/\s/g, '').match(/[\d]+/g) || [];
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);

            const resultMinElement = document.getElementById(RESULT_MIN_ELEMENT_ID);
            resultMinElement.innerText = Number.isFinite(min) ? min : '';

            const resultMaxElement = document.getElementById(RESULT_MAX_ELEMENT_ID);
            resultMaxElement.innerText = Number.isFinite(max) ? max : '';
        }

        create = () => {
            const container = document.createElement('div');
            container.addEventListener('input', this._hanldeChange);

            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.name = '_value';

            const resultMinElement = document.createElement('div');
            resultMinElement.id = RESULT_MIN_ELEMENT_ID;

            const resultMaxElement = document.createElement('div');
            resultMaxElement.id = RESULT_MAX_ELEMENT_ID;

            const descriptionRow = _factory.createRow({size: 6, element: 'Введите числа через запятую'});

            const inputRow = _factory.createRow(
                {size: 2, element: 'Массив'},
                {size: 4, element: inputElement},
            );

            const resultMinRow = _factory.createRow(
                {size: 2, element: 'min'},
                {size: 4, element: resultMinElement},
            );

            const resultMaxRow = _factory.createRow(
                {size: 2, element: 'max'},
                {size: 2, element: resultMaxElement},
            );

            container.appendChild(descriptionRow);
            container.appendChild(inputRow);
            container.appendChild(resultMinRow);
            container.appendChild(resultMaxRow);

            return container;
        }
    }

    return NumberComparisonContainer;
})();