// Este é o ponto de entrada de sua aplicação

import routes from './routes.js';

const main = document.querySelector('#root');


const validateHash = hash => (hash === '' ? 'home' : hash.replace('#', ''));


const renderPage = () => {
  main.innerHTML = '';
  const page = validateHash(window.location.hash);
  main.appendChild(routes[page]);
};

const loading = () => window.addEventListener('hashchange', renderPage);

window.addEventListener('load', () => {
  renderPage();
  loading();
});


// Função-menu-responsivo

function iconResp() {
  const addClass = document.querySelector('.container');

  if (addClass.className === 'container') {
    addClass.className += 'ativo';
  } else {
    addClass.className = 'container';
  }
}

const menu = document.querySelector('.icon');
menu.addEventListener('click', (e) => {
  e.preventDefault();
  iconResp();
});
