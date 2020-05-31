// Este é o ponto de entrada de sua aplicação
import { home } from './pages/home/main.js';

const main = document.querySelector('#root');

window.addEventListener('load', () => {
  main.appendChild(home());
});

// document.querySelector('#root').appendChild(home());

function iconResp() {
  const addClass = document.querySelector('container');

  if (addClass.className === 'container') {
    addClass.className += 'ativo';
  } else {
    addClass.className = 'container';
  }
}

const menu = document.querySelector('icon');
menu.addEventListener('click', (e) => {
  e.preventDefault();
  iconResp();
});
