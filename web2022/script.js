(function() {
    const FRAME_ID = 'task-frame';
    const TASK_SELECT_ID = 'task-select';
    const TASK_DESCRIPTION = 'task-description';

    const TASK_OPTIONS = [
        { label: 'Задание 1', value: '1' },
        { label: 'Задание 2', value: '2' },
        { label: 'Задание 3', value: '3' },
        { label: 'Задание 4', value: '4' },
        { label: 'Задание 5', value: '5' },
        { label: 'Задание 6', value: '6' },
    ];

    const TASK_PATH = {
        1: './lesson1/index.html',
        2: './lesson2/index.html',
        3: './lesson3/index.html',
        4: './lesson4/index.html',
        5: './lesson5/index.html',
        6: './lesson6/index.html',
    };

    class TaskContainer {
        constructor(id) {
            this.id = id;
        }

        setTask(value) {
            const element = document.getElementById(this.id);
            element.src = TASK_PATH[value];
        }
    }

    class App {
        constructor() {
            this.taskContainer = new TaskContainer(FRAME_ID);
        }

        handleChangeTask = (value) => {
            this.taskContainer.setTask(value);
        };

        render() {
            new AppComponents.Select(TASK_SELECT_ID, TASK_OPTIONS, this.handleChangeTask).render();
            this.taskContainer.setTask(1);
        }
    }

    new App().render();

})();


