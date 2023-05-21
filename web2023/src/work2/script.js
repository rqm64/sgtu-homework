(function() {

    const renderTitle = (rootElement) => {
        rootElement.appendChild($utils.create('h3', $text.work2.title));
    };

    const renderLesson1 = (rootElement) => {
        const arr1 = [1, 2, 3];
        const arr2 = new Array(1, 2, 3);
        const arr3 = Array(1, 2, 3);

        let result = '';
        result += arr1.join(' ') + '\n';
        result += arr2.join(' ') + '\n';
        result += arr3.join(' ') + '\n';

        rootElement.appendChild($utils.createLesson($text.work2.lesson1, result));
    };

    const renderLesson2 = (rootElement) => {
        const arr = [1, 2, 3, 4, 5];

        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            alert(arr[4]);
            arr[5] = null;
        };

        rootElement.appendChild($utils.createLesson($text.work2.lesson2, buttonElement));
    };

    const renderLesson3 = (rootElement) => {
        const arr = [1, 2, 3, 4, 5];
        const element = $utils.create('pre', arr.join(' '));
        element.title = arr.length;

        rootElement.appendChild($utils.createLesson($text.work2.lesson3, element));
    };

    const renderLesson4 = (rootElement) => {
        const arr = [1, 2, 3, 4, 5];

        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            for (let i = 0; i < arr.length; i++) {
                alert(arr[i]);
            }
        };

        rootElement.appendChild($utils.createLesson($text.work2.lesson4, buttonElement));
    };

    const renderLesson5 = (rootElement) => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 2, 1];
        const arr3 = arr1.concat(arr2);

        rootElement.appendChild($utils.createLesson($text.work2.lesson5, arr3.join(' ')));
    };

    const renderLesson6 = (rootElement) => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 2, 1];
        const arr3 = arr1.concat(arr2);
        arr3.shift();

        rootElement.appendChild($utils.createLesson($text.work2.lesson6, arr3.join(' ')));
    };

    const renderLesson7 = (rootElement) => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 2, 1];
        const arr3 = arr1.concat(arr2);
        arr3.pop();

        rootElement.appendChild($utils.createLesson($text.work2.lesson7, arr3.join(' ')));
    };

    const renderLesson8 = (rootElement) => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 2, 1];
        const arr3 = arr1.concat(arr2);
        arr3.unshift(4);

        rootElement.appendChild($utils.createLesson($text.work2.lesson8, arr3.join(' ')));
    };

    const renderLesson9 = (rootElement) => {
        const date = new Date();
        const dateString = date.toString();

        rootElement.appendChild($utils.createLesson($text.work2.lesson9, dateString));
    };

    const renderLesson10 = (rootElement) => {
        const date = new Date();
        const dateString = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

        rootElement.appendChild($utils.createLesson($text.work2.lesson10, dateString));
    };

    const renderLesson11 = (rootElement) => {
        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            const first = Math.floor(Math.random() * (50 + 1));
            const second = Math.floor(Math.random() * (50 + 1));
            alert(`${first} * ${second} = ${first * second}`);
        };

        rootElement.appendChild($utils.createLesson($text.work2.lesson11, buttonElement));
    };

    const render = () => {
        const rootElement = document.getElementById('root');
        renderTitle(rootElement);
        renderLesson1(rootElement);
        renderLesson2(rootElement);
        renderLesson3(rootElement);
        renderLesson4(rootElement);
        renderLesson5(rootElement);
        renderLesson6(rootElement);
        renderLesson7(rootElement);
        renderLesson8(rootElement);
        renderLesson9(rootElement);
        renderLesson10(rootElement);
        renderLesson11(rootElement);

    };

    render();
})();
