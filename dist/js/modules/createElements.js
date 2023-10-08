export const createElement = (tag, param = {}, text) => {
    const element = document.createElement(tag);
    Object.assign(element, param);
    if (text) {
        element.textContent = text;
    }
    return element;
};
export const createTitle = (title) => {
    return createElement('h1', {
        className: 'page__title app-title mb-4',
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
    const form = createElement('form', {
        className: 'form d-flex align-items-center mb-3',
        name: 'taskForm',
    });
    const label = createElement('label', {
        className: 'form-group me-3',
    });
    const inputTask = createElement('input', {
        type: 'text',
        className: 'form-control',
        placeholder: 'Введите задачу',
        name: 'taskTitle',
    });
    label.append(inputTask);
    const submitBtn = createButton({
        type: 'submit',
        className: 'btn btn-outline-primary me-2',
        title: 'Сохранить',
        textContent: 'Сохранить',
    });
    const resetBtn = createButton({
        type: 'reset',
        className: 'btn btn-outline-warning',
    }, 'Очистить');
    form.append(label, submitBtn, resetBtn);
    return form;
};
