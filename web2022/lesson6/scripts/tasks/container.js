const TaskContainer = (() => {
    const TASK_CONTAINER_ID = 'task-container';
    const TASK_SELECT_ID = 'task-select';

    const TASK_COMPONENTS = {
        1: AreaTriangle,
        2: StringComparison,
        3: NumberComparison,
        4: Timer,
        5: Test,
        6: Screensaver,
    };

    const TASK_OPTIONS = [
        { label: 'Площадь треугольника', value: 1 },
        { label: 'Сравнение строк', value: 2 },
        { label: 'Мин./макс. значение', value: 3 },
        { label: 'Таймер', value: 4 },
        { label: 'Тест', value: 5 },
        { label: 'Заставка', value: 6 },
    ];

    class Container {
        constructor(id) {
            this._id = id;
        }

        _setTask = (value) => {
            document.getElementById(TASK_CONTAINER_ID).replaceChildren(new TASK_COMPONENTS[value]().create());
        }

        render = () => {
            const taskContainer = document.createElement('div');
            taskContainer.id = TASK_CONTAINER_ID;

            const select = document.createElement('div');
            select.style.width = '250px';
            select.style.marginBottom = '24px';

            select.className = 'select';
            select.id = TASK_SELECT_ID;

            document.getElementById(this._id).append(select, taskContainer);

            new AppComponents.Select(TASK_SELECT_ID, TASK_OPTIONS, this._setTask).render();

            this._setTask(1);
        }
    }

    return Container;

})();
