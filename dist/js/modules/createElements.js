export const createElement = (tag, param = {}, text) => {
    const element = document.createElement(tag);
    Object.assign(element, param);
    if (text) {
        element.textContent = text;
    }
    return element;
};
export const createTitle = (title) => {
    return createElement('h2', {
        className: 'app-title mb-3',
        textContent: title,
    });
};
export const createButton = ({ id, className, type = 'button', textContent, title }, text) => {
    const button = createElement('button');
    Object.assign(button, { className, type, textContent });
    if (id) {
        Object.assign(button, { id });
    }
    if (title) {
        Object.assign(button, { title });
    }
    if (text) {
        Object.assign(button, { textContent: text });
    }
    return button;
};
export const createForm = () => {
    return createElement('form', {
        className: 'form',
        name: 'taskForm',
    });
};
