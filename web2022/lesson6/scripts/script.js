(function() {
    const ID_TASK_CONTAINER = "ls6-task-container";

    class App {
        render() {
            new UserLogin(ID_TASK_CONTAINER).render();
            new TaskContainer(ID_TASK_CONTAINER).render();
        }
    }

    new App().render();
})();


