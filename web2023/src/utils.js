const $utils = (() => {
    const createElement = (tag, content) => {
        const element = document.createElement(tag);

        if (typeof content === 'string') element.textContent = content;
        if (typeof content === 'object') element.appendChild(content);

        return element;
    };
    
    const createLesson = (title, content) => {
        const element = createElement('div');
        element.appendChild(createElement('br'));
        element.appendChild(createElement('div', `Задание: ${title}`));
        element.appendChild(createElement('br'));
        element.appendChild(createElement('div', 'Решение:'));

        if (typeof content === 'string') {
            element.appendChild(createElement('pre', content));
        }
        
        if (typeof content === 'object') {
            element.appendChild(content);
        }

        element.appendChild(createElement('hr'));

        return element;
    };

    return {
        create: createElement,
        createLesson,
    };
})();