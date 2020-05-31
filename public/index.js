// Este é o ponto de entrada de sua aplicação
import routes from "./routes.js";

const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
  RenderPage ();
  })
}

const RenderPage = () =>{ 
  main.innerHTML = "";
  const page = validateHash(window.location.hash);
  main.appendChild(routes[page]);
  
}

const validateHash = (hash) => hash === "" ? "home" : hash.replace("#","");
console.log(validateHash)
window.addEventListener("load", () => {
  RenderPage();
  init();
})  

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
