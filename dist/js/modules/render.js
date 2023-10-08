import { createButton, createTitle, createForm } from "./createElements.js";
export const renderApp = ({ app, appTitle, }) => {
    console.log('рендер', app);
    const title = createTitle(appTitle);
    console.log('title appTitle: ', title);
    app?.append(title);
    const form = createForm();
    app?.append(form);
    const simpleBtn = createButton({
        className: 'btn btn-outline-warning btn-sm mb-1',
        textContent: 'Finish',
        title: 'Завершение задания',
    });
    app.append(simpleBtn);
    const submitBtn = createButton({
        type: 'submit',
        className: 'btn btn-outline-primary mb-2',
        title: 'Сохранить',
        textContent: 'Сохранить',
    });
    app.append(submitBtn);
    const resetBtn = createButton({
        type: 'reset',
        className: 'btn btn-outline-danger',
    }, 'Очистить');
    app.append(resetBtn);
};
