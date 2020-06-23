// import { perfilUser } from './data.js';

export const perfil = () => {
  const container = document.createElement('div');

  const template = `
  <div class="register-container">
    <img src="./img/avatar.png" />
      <div class="register-form">
    <h3>Atualizar Cadastro</h3>
      <form method= "post" class="form-register">
        <input id="email" type= "e-mail" placeholder = "E-mail" disabled></input>
        <input id="full-name" type= "url" placeholder = "http://foto-de-perfil" requered>
        <input id="user-name" type= "text" placeholder = "Nome de usuário" requered>
        <input id="password" type= "password" placeholder = "Password" requered>    
        <button type="submit" class="btCadastro">Atualizar Cadastro</button>        
      </form>
    </div>  
  </div>
    `;

  container.innerHTML = template;


  const btCadastro = container.querySelector('.btCadastro');
  btCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    // const email = container.querySelector('#email').value;
    // const fullName = document.querySelector('#full-name').value;
    // const userName = document.querySelector('#user-name').value;
    // const password = container.querySelector('#password').value;
    // perfilUser(email, password, fullName, userName);
  });
  // perfilUser(template);
  return container;
};
