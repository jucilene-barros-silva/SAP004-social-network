// Aqui serão criados os eventos de Manipulação de DOM e templates
import { greeting } from "./data.js";

export const home = () => {
  const container = document.createElement("div");

  container.innerHTML = `
    <form>
      <input id="email" type="text">
      <input id="password" type= "text" 
      <button id="login-btn">Log in</button>
    </form>
    <div id="greeting-message"></div>
  `;

  const name = container.querySelector("#email");
  const logInBtn = container.querySelector("#login-btn");
  const greetingMessage = container.querySelector("#greeting-message");

  greetingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    greetingMessage.innerHTML = greeting(name.value);
  });

  return container;
};
