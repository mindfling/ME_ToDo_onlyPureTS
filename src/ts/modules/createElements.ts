// * creates
export const createElement = (tag: string, param: {} = {}, text?: string): HTMLElement => {
  const element: HTMLElement = document.createElement(tag);
  Object.assign(element, param);
  if (text) {
    element.textContent = text;
  }
  return element;
}


// * Заголовок 
export const createTitle = (title: string): HTMLElement => {
  return createElement('h1', {
    className: 'page__title app-title mb-4',
    textContent: title,
  });
}


// * элемент кнопки
export const createButton = ({
  id,
  className,
  type = 'button',
  textContent,
  title
}: {
  id?: string;
  className: string;
  type?: string;
  textContent?: string;
  title?: string
},
text?: string): HTMLButtonElement => {
  const button: HTMLButtonElement = createElement('button') as HTMLButtonElement;
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


// * форма ввода задания
export const createForm = (): HTMLFormElement => {
  const form: HTMLFormElement = createElement('form', {
    className: 'form d-flex align-items-center mb-3',
    name: 'taskForm',
  }) as HTMLFormElement;

  // todo перенести в render
  // поле ввода задания
  const label = createElement('label', {
    className: 'form-group me-3',
  }) as HTMLInputElement;
  const inputTask = createElement('input', {
    type: 'text',
    className: 'form-control',
    placeholder: 'Введите задачу',
    name: 'taskTitle',
  }) as HTMLInputElement;
  label.append(inputTask);

  // кнопка ввода
  const submitBtn: HTMLButtonElement = createButton({
    type: 'submit',
    className: 'btn btn-outline-primary me-2',
    title: 'Сохранить',
    textContent: 'Сохранить',
  });

  // кнопка очистки
  const resetBtn: HTMLButtonElement = createButton({
    type: 'reset',
    className: 'btn btn-outline-warning',
  }, 'Очистить');


  form.append(label, submitBtn, resetBtn);
  return form;
}