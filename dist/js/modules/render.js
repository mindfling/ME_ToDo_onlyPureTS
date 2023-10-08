import { createButton, createTitle, createForm } from "./createElements.js";
export const renderApp = ({ app, appTitle, }) => {
    console.log('рендер', app);
    const title = createTitle(appTitle);
    console.log('page__title appTitle: ', title);
    const form = createForm();
    const simpleBtn = createButton({
        className: 'btn btn-outline-success btn-sm mb-1',
        textContent: 'Finish',
        title: 'Завершение задания',
    });
    const submitBtn = createButton({
        type: 'submit',
        className: 'btn btn-outline-primary mb-2',
        title: 'Сохранить',
        textContent: 'Сохранить',
    });
    const resetBtn = createButton({
        type: 'reset',
        className: 'btn btn-outline-danger mb-2',
    }, 'Очистить');
    app.append(title, form);
};
