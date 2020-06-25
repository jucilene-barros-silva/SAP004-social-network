export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.href = '#feed';
    });
}

export function loginEmailAndPass(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = '#feed';
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        return 'Senha incorreta!';
      } if (error.code === 'auth/user-not-found') {
        return 'E-mail não localizado!';
      } if (error.code === 'auth/invalid-email') {
        return 'E-mail invalido!';
      } return `Codigo de error: ${error.code}`;
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
      showHeader  ();
    }
  });
}

export function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#';
  });
}

const btLogout = document.querySelector('#logout');
btLogout.addEventListener('click', () => {
  logout();
  showHeader();
});
