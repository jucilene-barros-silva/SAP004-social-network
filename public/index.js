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
