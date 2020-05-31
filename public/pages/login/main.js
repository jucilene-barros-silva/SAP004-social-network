export const createAccount = () =>{
    const contaner = document.createElement('div');

    const template = `
    <button id = "login-fa-btn">Entrar com o Facebook</button>
    <button id = "login-go-btn">Entrar com o Google</button>
    <p>OU</p>
    <form method = "post">
    <input id = "email" type = "e-mail" placeholder = "Email" >
    <input id = "full-name" type = "text" placeholder = "Nome completo">
    <input id = "user-name" type = "text" placeholder = "Nome de usuário">
    <input id = "password" type = "password" placeholder = "Password">
    <button id = "login-btn">Cadastre-se</button>
    </form>
    <p>Tem uma conta? <a href = "/#" >Conecte-se </a></p>
    `;

    const loginFaBtn = document.querySelector("#login-fa-btn");
    const loginGoBtn = document.querySelector("#login-go-btn");
    const email = document.querySelector("#email");
    const fullName = document.querySelector("#full-name");
    const userName = document.querySelector("#user-name");
    const password = document.querySelector("#password");
    const loginBtn = document.querySelector("#login-btn")

    contaner.innerHTML = template;

  return contaner;
} 