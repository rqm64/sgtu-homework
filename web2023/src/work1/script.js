(function() {

    const renderTitle = (rootElement) => {
        rootElement.appendChild($utils.create('h3', $text.work1.title));
    };

    const renderLesson1 = (rootElement) => {
        const chechType = (data) => {
            if (typeof data === 'string') return 'строка';
            if (typeof data === 'bigint' || typeof data === 'number') return 'число';
            if (typeof data === 'boolean') return 'логический тип';
            if (typeof data === 'function') return 'функция';
            if (typeof data === 'object') return 'объект';
            if (typeof data === 'symbol') return 'символ';
            if (typeof data === 'undefined') return 'undefined';
        };

        const var1 = 'Переменная';
        const var2 = 123;
        const var3 = true;
        const var4 = {};
        const var5 = Symbol();
        const var6 = undefined;

        let result = '';
        result += chechType(var1) + '\n';
        result += chechType(var2) + '\n';
        result += chechType(var3) + '\n';
        result += chechType(var4) + '\n';
        result += chechType(var5) + '\n';
        result += chechType(var6) + '\n';

        rootElement.appendChild($utils.createLesson($text.work1.lesson1, result));
    };

    const renderLesson2 = (rootElement) => {
        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            let value = prompt('Введите знак зодиака');
            alert(`Приветствую тебя, ${value}!`);
        };

        rootElement.appendChild($utils.createLesson($text.work1.lesson2, buttonElement));
    };

    const renderLesson3 = (rootElement) => {
        const runWhile = () => {
            let i = 0;
            let result = ''

            while (i < 40) {
                i++;
                result += i + ' ';
            }

            return result;
        }

        const runFor = () => {
            let result = ''

            for (let i = 0; i < 40; i++) {
                result += i + 1 + ' ';
            }

            return result;
        }

        const runDoWhile = () => {
            let i = 0;
            let result = '';

            do {
                i++;
                result += i + ' ';
              } while (i < 40);

            return result;
        }

        let result = '';
        result += runWhile() + '\n';
        result += runFor() + '\n';
        result += runDoWhile() + '\n';

        rootElement.appendChild($utils.createLesson($text.work1.lesson3, result));
    };

    const renderLesson4 = (rootElement) => {
        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            while (true) {
                prompt('Сообщение');
            }
        };

        rootElement.appendChild($utils.createLesson($text.work1.lesson4, buttonElement));
    };

    const renderLesson5 = (rootElement) => {
        const buttonElement = $utils.create('button', 'Запустить');
        buttonElement.onclick = () => {
            while (true) {
                let value = prompt('Введите число больше 5');

                if (value === null) break;
        
                if (!isNaN(parseFloat(value)) && +value > 5) {
                    alert('Верный ввод!');
                    break;
                }
            }
        };

        rootElement.appendChild($utils.createLesson($text.work1.lesson5, buttonElement));
    };

    const renderLesson6 = (rootElement) => {
        let result = '';

        for (i = 8; i < 21; i++) {
            if (!(i % 2)) result += i + ' ';
        }

        rootElement.appendChild($utils.createLesson($text.work1.lesson6, result));
    };

    const renderLesson7 = (rootElement) => {
        let result = '';

        for (i = 1; i < 8; i++) {
            if (i % 2 && i !==5) result += i + ' ';
        }

        rootElement.appendChild($utils.createLesson($text.work1.lesson7, result));
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
    };

    render();
})();
