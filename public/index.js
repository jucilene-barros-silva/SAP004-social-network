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
