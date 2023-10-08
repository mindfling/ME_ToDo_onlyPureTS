import { TITLE } from "./consts.js";
import { renderApp } from "./modules/render.js";
console.log('hello %c\"' + TITLE + '\"', "color:lawngreen");
document.querySelector('title').textContent = `${TITLE}`;
renderApp({
    app: document.getElementById('app'),
    appTitle: TITLE,
});
