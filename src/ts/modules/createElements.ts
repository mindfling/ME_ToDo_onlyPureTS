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
  return createElement('h2', {
    className: 'app-title mb-3',
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
export const createForm = (): HTMLElement => {
  return createElement('form', {
    className: 'form',
    name: 'taskForm',
    
  })
}