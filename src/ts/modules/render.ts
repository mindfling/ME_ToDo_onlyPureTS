import { createButton, createTitle, createForm } from "./createElements.js";

// * прорисовка приложения
export const renderApp = ({
  app,
  appTitle,
}: {
  app: HTMLElement,
  appTitle: string,
  //
}): void => {
  console.log('рендер', app);

  // заголовок
  const title: HTMLElement = createTitle(appTitle) as HTMLTitleElement;
  console.log('page__title appTitle: ', title);
  // app?.append(title);
  
  
  // форма ввода заданий
  const form: HTMLFormElement = createForm() as HTMLFormElement;
  // app.append(form);

  
  // таблица заданий


  const simpleBtn: HTMLButtonElement = createButton({
    className: 'btn btn-outline-success btn-sm mb-1',
    textContent: 'Finish',
    title: 'Завершение задания',
  });

  const submitBtn: HTMLButtonElement = createButton({
    type: 'submit',
    className: 'btn btn-outline-primary mb-2',
    title: 'Сохранить',
    textContent: 'Сохранить',
  });

  const resetBtn: HTMLButtonElement = createButton({
    type: 'reset',
    className: 'btn btn-outline-danger mb-2',
  }, 'Очистить');

  // app.append(resetBtn, submitBtn, simpleBtn);


  app.append(title, form,);
}
