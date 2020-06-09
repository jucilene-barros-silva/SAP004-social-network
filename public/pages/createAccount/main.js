import { createUser, observador } from './data.js';


export const createAccount = () => {
  const container = document.createElement('div');

  const template = `
  <div class="register-container">
    <div class="register-titulo">
      <h3>Cadastre e entre para a nossa comunidade.</h3>
    </div>
    <div class="register-form">
      <form method= "post" class="form-register">
        <input id="email" type= "e-mail" placeholder = "E-mail" >
        <input id="full-name" type= "text" placeholder = "Nome completo">
        <input id="user-name" type= "text" placeholder = "Nome de usuário">
        <input id="password" type= "password" placeholder = "Password">    
        <button type="submit" class="btCadastro">Cadastre-se</button>
      </form>
    </div>  
    <div class="register-home">
      <p>Tem uma conta? <a href = "/#">Conecte-se </a></p>
    </div>
  </div>
    `;

  container.innerHTML = template;

  const btCadastro = container.querySelector('.btCadastro');
  btCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const email = container.querySelector('#email').value;
    // const fullName = document.querySelector('#full-name');
    // const userName = document.querySelector('#user-name');
    const password = container.querySelector('#password').value;
    createUser(email, password);
    email.reset();
    password.reset();
  });

  return container;
};
