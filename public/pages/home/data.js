// import {
//   auth,
// } from '../../firebase';

export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    alert('Cadastrado!');
  }).catch((error) => {
    const errorCode = error.code;
    return (errorCode);
  });
}
