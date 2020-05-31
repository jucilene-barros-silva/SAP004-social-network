// Aqui serão criados os eventos de Manipulação de DOM e templates
// import {
//   greeting
// } from "./data.js";
// Initialize the FirebaseUI Widget using Firebase.


export const home = () => {
  const container = document.createElement('div');
  
  const template = `
      <form>
        <input id = "email" type = "e-mail" name = "email" placeholder = "Email" >
        <input id = "password" type = "password" name = "password"placeholder = "Password">
        <button id = "login-btn">Log in</button>
      </form>
      <p>Entar com...<p>
      <figure>
      <a href = "https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>
      <a href = "https://accounts.google.com/"><i class="fab fa-google fa-2x"></i></a>
      </figure>
      <p>Não tem uma conta? <a href = "#emailSingnUp">Cadastre-se</a></p>
    `;
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const loginBtn = document.querySelector("#login-btn")

    container.innerHTML = template;

    return container;
}

  return container;


// eslint-disable-next-line semi
}

/*
 export const home = () => {
   const container = document.createElement("div");

  container.innerHTML = `
    <form>
     <input id="email" type="text">
      <input id="password" type= "text">
      <button id="login-btn">Log in</button>
    </form>
    <div id="greeting-message"></div>
  `;

  const email = container.querySelector("#email");
  const password = container.queryselector("#password")
  const logInBtn = container.querySelector("#login-btn");
  const greetingMessage = container.querySelector("#greeting-message");

  logInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    greetingMessage.innerHTML = greeting(name.value);
  });

  return container;
}
*/
