import { auth } from '../../firebase';

// Aqui serão exportadas as funções que irão ser usadas

const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  auth.createUserWithEmailAndPassword(email, password).then(() => {
    window.location.href = '';
  }).catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
  });
});
