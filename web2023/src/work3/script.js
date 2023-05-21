(function() {
    const TEST_QUESTIONS = [
        {
            text: 'null == undefined',
            answers: ['true', 'false'],
            result: 'true',
        },
        {
            text: 'null === undefined',
            answers: ['true', 'false'],
            result: 'false',
        },
        {
            text: 'typeof "1" ?',
            answers: ['string', 'number', 'boolean'],
            result: 'string',
        },
        {
            text: '1 && 2',
            answers: ['1', '2', 'true', 'false'],
            result: '2',
        },
        {
            text: '1 || 2',
            answers: ['1', '2', 'true', 'false'],
            result: '1',
        },
        {
            text: 'const arr = [1, 2, 3];\nconsole.log(arr[3]);',
            answers: ['1', '3', 'undefined', 'ошибка'],
            result: 'undefined',
        },
        {
            text: 'let a = {a: 1};\n let b = {a: 1};\n let c = a;\n console.log(a === b, a === c);',
            answers: ['true true', 'true false', 'false true', 'false false'],
            result: 'false true',
        },
        {
            text: '!!0',
            answers: [ 'true', 'false', '0', '1'],
            result: 'false',
        },
        {
            text: 'let a = 0;\nlet b = a++;\nlet c = ++a;\nlet d = a;\nconsole.log(a, b, c, d);',
            answers: [ '0 1 2 0', '0 0 2 0', '2 0 2 2', '1 0 1 1'],
            result: '2 0 2 2',
        },
        {
            text: 'const o = {};\nconsole.log(o.toString());',
            answers: [ 'true', '{}', '[object Object]', '[string String]'],
            result: '[object Object]',
        },
    ];

    const renderTitle = (rootElement) => {
        rootElement.appendChild($utils.create('h3', $text.work3.title));
    };

    const renderDescription = (rootElement) => {
        rootElement.appendChild($utils.create('p', $text.work3.description));
    };

    const renderLogin = () => {
        if (!sessionStorage.getItem("login")) {
            const name = prompt('Введите имя пользователя');
            sessionStorage.setItem('login', name);
            alert('Вы успешно авторизовались');
        }
    };

    const renderTest = (rootElement) => {
        const formElement = $utils.create('form');
        formElement.onsubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.target);

            let result = '';
            let correct = 0;
            [...data.values()].forEach((item, index) => {
                const isCorrect = item === TEST_QUESTIONS[index].result;
                result += `Вопрос №${index + 1}: ${isCorrect ? 'Верно': 'Не верно'}\n`;
                if (isCorrect) correct++;
            });
            result += `Правильные ответы: ${correct} из ${TEST_QUESTIONS.length}`

            alert(result);
        };

        TEST_QUESTIONS.forEach((item, index) => {
            const preElement = $utils.create('pre', item.text);
            const answersElement = $utils.create('p');

            item.answers.forEach((answer) => {
                const labelElement = $utils.create('label');
                const radioElement = $utils.create('input');
                radioElement.type = 'radio';
                radioElement.required = true;
                radioElement.name = index.toString();
                radioElement.value = answer;
        
                labelElement.appendChild(radioElement);
                labelElement.innerHTML += answer;

                answersElement.appendChild(labelElement);
                answersElement.appendChild($utils.create('br'));
            });

            formElement.appendChild(preElement);
            formElement.appendChild(answersElement);
            formElement.appendChild($utils.create('hr'));
        });

        const buttonElement = $utils.create('button', 'Отправить');
        buttonElement.type = 'submit';
        formElement.appendChild(buttonElement);

        rootElement.appendChild(formElement);
    };

    const render = () => {
        const rootElement = document.getElementById('root');
        renderLogin(rootElement);
        renderTitle(rootElement);
        renderDescription(rootElement);
        renderTest(rootElement);
    };

    render();
})();
