export const createAccount = () => {
  const container = document.createElement('div');

  const template = `
  <div class="register-container>
    <div><h3>Cadastre e explore seu sonhos.</h3></div>
      <form method= "post" class="form-register">
        <input id ="email" type = "e-mail" placeholder = "E-mail" >
        <input id ="full-name" type = "text" placeholder = "Nome completo">
        <input id ="user-name" type = "text" placeholder = "Nome de usuário">
        <input id ="password" type = "password" placeholder = "Password">    
        <button id = "login-btn" type = "submit" >Cadastre-se</button>
      </form>
      <div>
      <p>Tem uma conta? <a href = "/#" >Conecte-se </a></p>
    </div>
  </div>
    `;


  // const email = document.querySelector('#email');
  // const fullName = document.querySelector('#full-name');
  // const userName = document.querySelector('#user-name');
  // const password = document.querySelector('#password');
  // const loginBtn = document.querySelector('#login-btn');

  container.innerHTML = template;

  return container;
};
