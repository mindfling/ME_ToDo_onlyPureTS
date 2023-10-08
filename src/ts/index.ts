// import { createButton, createElement, createTitle } from "./modules/createElements.js";
import { TITLE } from "./consts.js";
import { renderApp } from "./modules/render.js";
import { getRandomId } from "./modules/util.js";

//? константы

console.log('hello %c\"' + TITLE + '\"', "color:lawngreen");


// ?
(document.querySelector('title') as HTMLElement).textContent = `${TITLE}-${getRandomId()}`;

// const app: HTMLElement = (document.getElementById('app') as HTMLElement);

renderApp({
  app: (document.getElementById('app') as HTMLElement),
  appTitle: TITLE,
});
