// Aqui serão criados os eventos de Manipulação de DOM e templates
// import {
//   greeting
// } from "./data.js";
// Initialize the FirebaseUI Widget using Firebase.


export const home = () => {
  const container = document.createElement('div');

  const template = `
      <div class="login-container">
        <div class="logo">
          <img src="/img/logo.png" />
        </div>
        <div class="form-container">
          <form class="form-login">
            <input id = "email" type="e-mail" name = "email" placeholder = "E-mail" >
            <input id = "password" type = "password" name = "password"placeholder = "Senha">
            <button id = "login-btn">Login</button>
          </form>
          <p>Entar com...<p>
          <figure class="logo-login">            
            <a href = "https://www.facebook.com/"><i class="fab fa-facebook fa-3x"></i></a>
            <a href = "https://accounts.google.com/"><i class="fab fa-google fa-3x"></i></a>
          </figure>
          <p>Não tem uma conta? <a href = "#create_account">Cadastre-se</a></p>
        </div>
      </div>
    `;


  container.innerHTML = template;

  return container;
};
