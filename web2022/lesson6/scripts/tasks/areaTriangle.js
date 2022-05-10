const AreaTriangle = (() => {

    const calcAreaTriangle = (base, height) => base * height * 0.5;

    const AREA_VALUE_ELEMENT_ID = 'area_triangle_value';

    const DEFAULT_HEIGHT = 0;
    const DEFAULT_BASE = 0;

    class AreaTriangleContainer {
        constructor() {
            this._base = DEFAULT_BASE;
            this._height = DEFAULT_HEIGHT;
        }

        _hanldeChange = (event) => {
            this[event.target.name] = event.target.value;
            this._calcArea();
        }

        _calcArea = () => {
            const area = this._base * this._height * 0.5;
            const areaElement = document.getElementById(AREA_VALUE_ELEMENT_ID);
            areaElement.innerText = area;
        }

        _setArea = () => {
            const areaValue = calcAreaTriangle(this._base, this._height);
            const areaElement = document.getElementById(AREA_VALUE_ELEMENT_ID);
            areaElement.innerText = areaValue;
        }

        create = () => {
            const container = document.createElement('div');
            container.addEventListener('input', this._hanldeChange);
            
            const baseInput = document.createElement('input');
            baseInput.type = 'number';
            baseInput.name = '_base';
            baseInput.value = DEFAULT_BASE;

            const heightInput = document.createElement('input');
            heightInput.type = 'number';
            heightInput.name = '_height';
            heightInput.value = DEFAULT_HEIGHT;

            const areaValue = document.createElement('div');
            areaValue.id = AREA_VALUE_ELEMENT_ID;
            areaValue.innerText = calcAreaTriangle(this._base, this._height);

            const baseRow = _factory.createRow(
                {size: 2, element: 'Основание'},
                {size: 4, element: baseInput},
            );

            const heightRow = _factory.createRow(
                {size: 2, element: 'Высота'},
                {size: 4, element: heightInput},
            );

            const areaRow = _factory.createRow(
                {size: 2, element: 'Площадь'},
                {size: 2, element: areaValue},
            );

            container.appendChild(baseRow);
            container.appendChild(heightRow);
            container.appendChild(areaRow);

            return container;
        }
    }

    return AreaTriangleContainer;
})();