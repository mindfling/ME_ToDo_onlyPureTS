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
  const title: HTMLElement = createTitle(appTitle);
  console.log('title appTitle: ', title);
  app?.append(title);
  
  
  // форма ввода заданий
  const form: HTMLElement = createForm();
  app?.append(form);

  
  // таблица заданий


  // todo
  // try buttons
  const simpleBtn: HTMLButtonElement = createButton({
    className: 'btn btn-outline-warning btn-sm mb-1',
    textContent: 'Finish',
    title: 'Завершение задания',
  });
  app.append(simpleBtn);

  const submitBtn: HTMLButtonElement = createButton({
    type: 'submit',
    className: 'btn btn-outline-primary mb-2',
    title: 'Сохранить',
    textContent: 'Сохранить',
  });
  app.append(submitBtn);

  const resetBtn: HTMLButtonElement = createButton({
    type: 'reset',
    className: 'btn btn-outline-danger',
  }, 'Очистить');
  app.append(resetBtn);


}
