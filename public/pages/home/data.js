
export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.href = '#perfil';
      const token = result.credential.accessToken;
      const user = result.user;
      return (token, user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return (errorCode, errorMessage);
    });
}

export function loginEmailAndPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.href = '#perfil';
      const token = result.uid;
      const user = result.user;
      return (token, user);
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        return ('Senha incorreta!');
      } if (error.code === 'auth/user-not-found') {
        return ('E-mail não localizado!');
      }
      return (`Codigo de error: ${error.code}`);
    });
}


// export function logout() {
//   firebase.auth().signOut().then(function() {

//   }).catch(function(error) {

//   });
// }


// export function observador() {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     }
//   });
// }
