const Timer = (() => {
    const TIMER_ELEMENT_ID = 'timer_element';

    const DEFAULT_DURATION = 0;

    const convertDurationToTime = (duration) => {
        const date = new Date(0);
        date.setSeconds(duration);
        return date.toISOString().substring(11, 19);
    };

    class TimerContainer {
        constructor() {
            this._duration = DEFAULT_DURATION;
            this._timeout = null;
        }

        _updateTime = () => {
            const container = document.getElementById(TIMER_ELEMENT_ID);
            container.innerText = convertDurationToTime(this._duration);
        }

        _start = () => {
            const onStep = () => {
                this._duration = ++this._duration;
                this._updateTime();
                this._timeout = setTimeout(onStep, 1000);
            };

            this._timeout = setTimeout(onStep, 1000);;
        }

        _stop = () => {
            clearTimeout(this._timeout);
            this._timeout = null;
        }

        _clear = () => {
            this._stop();
            this._duration = DEFAULT_DURATION;
            this._updateTime();
        }

        create = () => {
            const container = document.createElement('div');

            const timerElement = document.createElement('div');
            timerElement.innerText = convertDurationToTime(this._duration);
            timerElement.id = TIMER_ELEMENT_ID;

            const buttonStart = document.createElement('button');
            buttonStart.innerText = 'Start'
            buttonStart.className = 'button';
            buttonStart.onclick = this._start;

            const buttonStop = document.createElement('button');
            buttonStop.innerText = 'Stop'
            buttonStop.className = 'button';
            buttonStop.onclick = this._stop;

            const buttonClear = document.createElement('button');
            buttonClear.innerText = 'Clear'
            buttonClear.className = 'button';
            buttonClear.onclick = this._clear;

            const timerRow = _factory.createRow({size: 2, element: timerElement});
            const startRow = _factory.createRow({size: 2, element: buttonStart});
            const stopRow = _factory.createRow({size: 2, element: buttonStop});
            const clearRow = _factory.createRow({size: 2, element: buttonClear});

            container.appendChild(timerRow);
            container.appendChild(startRow);
            container.appendChild(stopRow);
            container.appendChild(clearRow);

            return container;
        }
    }

    return TimerContainer;
})();