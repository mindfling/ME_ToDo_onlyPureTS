// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import tsLogo from '/ts.svg';
import viteLogo from '/vite.svg';
import { getRandomId } from './modules/utils';

console.log('hello main vite');

const html: string = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${tsLogo}" class="logo" alt="Vite logo" title="vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${viteLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button">button</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;


const elem: HTMLDivElement = document.querySelector('.app') as HTMLDivElement
console.log('elem: ', elem);

elem.innerHTML = html;


const button: HTMLButtonElement = document.querySelector('#counter') as HTMLButtonElement;
button.textContent = getRandomId();
button.addEventListener('click', () => {
  button.textContent = getRandomId();
});

