import {
  auth,
  } from '../../firebase';
// Aqui serão exportadas as funções que irão ser usadas
window.addEventListener('load', () => init());

export function createUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password).then(() => {
    alert('Cadastrado!');
  }).catch((error) => {
    const errorCode = error.code;
    return (errorCode);
  });

}