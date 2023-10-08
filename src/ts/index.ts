// import { createButton, createElement, createTitle } from "./modules/createElements.js";
import { TITLE } from "./consts.js";
import { renderApp } from "./modules/render.js";
import { getRandomId } from "./modules/util.js";


//? константы
console.log('hello %c\"' + TITLE + '\"', "color:lawngreen");


// ? title
(document.querySelector('title') as HTMLElement).textContent = `${TITLE}`;


// ? application render
renderApp({
  app: (document.getElementById('app') as HTMLElement),
  appTitle: TITLE,
});
