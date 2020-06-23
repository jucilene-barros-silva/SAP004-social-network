import { createUser } from './data.js';


export const createAccount = () => {
  const container = document.createElement('div');

  const template = `
  <div class="register-container">
    <img src="./img/cadastro.svg" />
      <div class="register-form">
    <h3>Cadastre e entre para a nossa comunidade.</h3>
      <form method= "post" class="form-register">
        <input id="email" type= "e-mail" placeholder = "E-mail" requered>
        <input id="full-name" type= "url" placeholder = "http://foto-de-perfil" requered>
        <input id="user-name" type= "text" placeholder = "Nome de usuário" requered>
        <input id="password" type= "password" placeholder = "Password" requered>    
        <button type="submit" class="btCadastro">Cadastre-se</button>
        <div class="register-home">
        <p>Tem uma conta? <a href = "/#">Faça login</a></p>
        </div>
      </form>
    </div>  
  
  </div>
    `;

  container.innerHTML = template;

  const btCadastro = container.querySelector('.btCadastro');
  btCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const email = container.querySelector('#email').value;
    const fullName = document.querySelector('#full-name').value;
    const userName = document.querySelector('#user-name').value;
    const password = container.querySelector('#password').value;
    createUser(email, password, fullName, userName);
  });

  return container;
};
