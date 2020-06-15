export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.href = '#feed';
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
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.href = '#feed';
      const token = result.uid;
      const user = result.user;
      console.log(token, user);
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        return 'Senha incorreta!';
      } if (error.code === 'auth/user-not-found') {
        return 'E-mail não localizado!';
      }
      return `Codigo de error: ${error.code}`;
    });
}

export function showHeader() {
  const header = document.getElementById('header');
  header.classList.toggle('block');
}

export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.href = '#feed';
      showHeader();
    }
  });
}

export function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#';
  });
}

const btLogout = document.querySelector('.logout');
btLogout.addEventListener('click', () => {
  logout();
  showHeader();
});
