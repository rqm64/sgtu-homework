(function() {
    const FRAME_ID = 'root-frame';

    const WORK_PATH = [
        'src/work1/index.html',
        'src/work2/index.html',
        'src/work3/index.html',
    ];

    const changeFrame = (src) => {
        const element = document.getElementById(FRAME_ID);
        element.src = src;
    };

    const renderMenu = (rootElement) => {
        const menuElement = $utils.create('div');
        menuElement.className = 'menu';

        WORK_PATH.forEach((item, index) => {
            const buttonElement = $utils.create('button', `Задание ${index + 1}`);
            buttonElement.onclick = () => changeFrame(item);
            menuElement.appendChild(buttonElement);
        });

        rootElement.appendChild(menuElement);
    };

    const renderFrame = (rootElement) => {
        const frameElement = $utils.create('iframe');
        frameElement.className = 'iframe';
        frameElement.id = FRAME_ID;
        frameElement.src = WORK_PATH[0];

        rootElement.appendChild(frameElement);
    };

    const render = () => {
        const rootElement = document.getElementById('root');
        renderMenu(rootElement);
        renderFrame(rootElement)
    };

    render();
})();
