const Test = (() => {
    const BUTTON_NEXT_ID = 'test-button-next';
    const QUESTION_CONTAINER_ID = 'test-question-container';
    const ANSWER_CONTAINER_ID = 'test-answer-container';

    const DEFAULT_STEP = 0;
    const RESULT_STEP = 10;

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

    const createAnswerList = (config, index, onChange) => {
        const list = document.createElement('div');

        config[index].answers.forEach((item) => {
            const container = document.createElement('label');
            container.className = 'radio';
            container.innerText = item;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.onchange = () => {
                onChange(item);
            };

            const mark = document.createElement('span');
            mark.className = 'checkmark';

            container.appendChild(input);
            container.appendChild(mark);

            list.appendChild(container);
        });

        return list;
    };

    const createResultList = (config, resultList) => {
        const resultContainer = document.createElement('div');
        let incorrectCount = 0;

        config.forEach((item, index) => {
            resultContainer.appendChild(document.createElement('hr'));

            config[index].answers.forEach((answer) => {
                const isUserAnswer = answer === resultList[index];
                const isCorrectAnswer = answer === item.result

                const element = document.createElement('div');
                element.innerText = `${answer} ${isUserAnswer ? 'v' : ''}`;

                if (isCorrectAnswer) {
                    element.style.color = 'green'
                } else if (isUserAnswer) {
                    element.style.color = 'red';
                    element.style.textDecoration = 'line-through';
                    ++incorrectCount; 
                };

                resultContainer.appendChild(element);
            });
        });

        resultContainer.appendChild(document.createElement('hr'));
        resultContainer.appendChild(document.createTextNode(`${10 - incorrectCount}/10`));

        return resultContainer;
    };

    class TestContainer {
        constructor() {
            this._step = DEFAULT_STEP;
            this._result = [];
        }

        _handleNextStep = () => {
            this._setStep(this._step + 1);
        }

        _setStep = (step) => {
            this._step = step;
            this._updateQuestion(step);
            this._updateAnswer(step);
            this._updateButton(step);
        }

        _updateQuestion = (step) => {
            const questionContainer = document.getElementById(QUESTION_CONTAINER_ID);
            questionContainer.innerText = step === RESULT_STEP ? 'Результат' : TEST_QUESTIONS[step].text
        }

        _updateAnswer = (step) => {
            const answerContainer = document.getElementById(ANSWER_CONTAINER_ID);

            if (step === RESULT_STEP) {
                answerContainer.replaceChildren(createResultList(TEST_QUESTIONS, this._result));
            } else {
                answerContainer.replaceChildren(createAnswerList(TEST_QUESTIONS, step, this._handleChangeValue));
            }
        }

        _updateButton = (step) => {
            const button = document.getElementById(BUTTON_NEXT_ID);

            if (step === RESULT_STEP) {
                button.innerText = 'Пройти заново';
                button.onclick = this._reset;
                return;
            }

            if (step === DEFAULT_STEP) {
                button.innerText = 'Далее';
                button.onclick = this._handleNextStep;
            }
            
            button.disabled = true;
        }

        _handleChangeValue = (value) => {
            document.getElementById(BUTTON_NEXT_ID).disabled = false;
            this._result[this._step] = value;
        }

        _reset = () => {
            this._result = [];
            this._setStep(DEFAULT_STEP);
        }

        create = () => {
            const container = document.createElement('div');

            const questionContainer = document.createElement('code');
            questionContainer.id = QUESTION_CONTAINER_ID;
            questionContainer.innerText = TEST_QUESTIONS[0].text;

            const answerContainer = document.createElement('div');
            answerContainer.id = ANSWER_CONTAINER_ID;
            answerContainer.appendChild(createAnswerList(TEST_QUESTIONS, 0, this._handleChangeValue));

            const buttonNext = document.createElement('button');
            buttonNext.id = BUTTON_NEXT_ID;
            buttonNext.className = 'button';
            buttonNext.innerText = 'Далее';
            buttonNext.disabled = true;
            buttonNext.onclick = this._handleNextStep;

            const questionRow = _factory.createRow({size: 12, element: questionContainer});
            const answerRow = _factory.createRow({size: 12, element: answerContainer});
            const buttonsRow = _factory.createRow({size: 12, element: buttonNext});

            container.appendChild(questionRow);
            container.appendChild(answerRow);
            container.appendChild(buttonsRow);

            return container;
        }
    }

    return TestContainer;
})();