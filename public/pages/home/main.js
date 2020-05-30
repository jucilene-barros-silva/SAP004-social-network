// Aqui serão criados os eventos de Manipulação de DOM e templates
import { greeting } from "./data.js";


export const home = () => {
  const container = document.createElement("div");
  
  const template = `
      <form>
        <input id = "email" type = "e-mail" placeholder = "Email" >
        <input id = "password" type = "password" placeholder = "Password">
        <button id = "login-btn">Log in</button>
      </form>
      <div id="greeting-message"></div>
      <p>Entar com...<p>
      <figure>
      <a href = "https://www.facebook.com/"><img src= "" alt= "Imagem logo facebook"></a>
      <a href = "https://accounts.google.com/"><img src= "" alt= "Imagem logo Google"></a>
      </figure>
      <p>Não tem uma conta? Cadastre-se</p>
    `;

    container.innerHTML = template;
console.log(container)
    return container;
}



// export const home = () => {
//   const container = document.createElement("div");

//   container.innerHTML = `
//     <form>
//       <input id="email" type="text">
//       <input id="password" type= "text">
//       <button id="login-btn">Log in</button>
//     </form>
//     <div id="greeting-message"></div>
//   `;

//   const email = container.querySelector("#email");
//   // const password = container.queryselector("#password")
//   const logInBtn = container.querySelector("#login-btn");
//   const greetingMessage = container.querySelector("#greeting-message");

//   logInBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     greetingMessage.innerHTML = greeting(name.value);
//   });

//   return container;
// };
