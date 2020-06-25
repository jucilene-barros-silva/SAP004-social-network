import { loginGoogle, loginEmailAndPass, observador } from './data.js';

export const home = () => {
  const container = document.createElement('div');

  const template = `
      <div class="login-container">
        <div class="logo">
          <img src="./img/logo2.svg" />
        </div>
        <div class="form-container">
          <form class="form-login">
            <input id = "email" type="e-mail" name = "email" placeholder = "E-mail" >
            <input id = "password" type = "password" name = "password"placeholder = "Senha">
            <span class="error"></span>
            <button id = "login-btn">Login</button>
            </form>
            <div class="link-senha"><a href="#">Esqueceu a senha?</a></div>     
          <div class="login-google">         
            <a href= "#" class="google"><img class="img" src="./img/new-google-favicon.svg" />Login with Google</a>            
          </div>
          <div class="cadastro">
          <p>Não tem uma conta? <a href = "#create-account">Cadastre-se</a>
          </div>
        </div>
      </div>
    `;

  container.innerHTML = template;

  const loginBtn = container.querySelector('#login-btn');
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;
    const error = container.querySelector('.error');
    loginEmailAndPass(email, password).then((result) => {
      error.innerHTML = result;
    });
    email.reset();
    password.reset();
    error.reset();
  });

  const btGoogle = container.querySelector('.login-google .google');
  btGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  observador();
  return container;
};
