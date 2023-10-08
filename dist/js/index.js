import { TITLE } from "./consts.js";
import { renderApp } from "./modules/render.js";
import { getRandomId } from "./modules/util.js";
console.log('hello %c\"' + TITLE + '\"', "color:lawngreen");
document.querySelector('title').textContent = `${TITLE}-${getRandomId()}`;
renderApp({
    app: document.getElementById('app'),
    appTitle: TITLE,
});
