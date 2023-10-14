// import { createButton, createElement, createTitle } from "./modules/createElements.js";
import { TITLE } from "./consts.js";
import { renderApp } from "./modules/render.js";
import { getRandomId } from "./modules/util.js";


//? константы
console.log('hello %c\"' + TITLE + '\"', "color:lawngreen");


// ? title
(document.querySelector('title') as HTMLElement).textContent = `${TITLE}`;


// todo app init()
const init = (appSelector: string, appTitle: string) => {
  console.log('Project initialisation...');
  
  const app: HTMLElement = document.getElementById(appSelector) as HTMLElement;
  return 
}


init('#app', TITLE);

/*
// ? application render
renderApp({
  app: (document.getElementById('app') as HTMLElement),
  appTitle: TITLE,
});
*/


// todo control()

