export const login = () => {
  const container = document.createElement('div');

  const template = `
  <form>
  <button id = "login-fa-btn">Entrar com o Facebook</button>
  <button id = "login-go-btn">Entrar com o Google</button>
  <p>OU</p>
  <input id = "email" type = "e-mail" placehouder = "Email" >
  <input id = "full-name" type = "text" placehouder = "Nome completo">
  <input id = "user-name" type = "text" placehouder = "Nome de usuário">
  <input id = "password" type = "password" placehouder = "Password">
  <button id = "login-btn">Cadastrar-se</button>
  </form>`;

  container.innerHTML = template;
  return container;
};
