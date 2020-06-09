
export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        return ('Senha incorreta');
      }
      return (`Codígo de error: ${error.code}`);
    });
}

export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.database().ref('usuarios').child(user.uid).set({
        nome: user.nome,
        usuario: user.usuario,
      });
      // showHeader();
      window.location.href = '#feed';
    }
  });
}
