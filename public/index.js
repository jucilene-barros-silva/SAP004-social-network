// Este é o ponto de entrada de sua aplicação
import { home } from './pages/home/main.js';


const main = document.querySelector("#root");

window.addEventListener("load", () => {
  main.appendChild(home());
})  

// document.querySelector('#root').appendChild(home());