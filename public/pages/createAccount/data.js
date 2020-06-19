
function register(uid, photo, userName) {
  const db = firebase.firestore();
  const authUid = firebase.auth().currentUser.uid;
  db.collection('users').doc(authUid).set({
    userUid: uid,
    photoURL: photo,
    nickName: userName,
  });
}

export function createUser(email, password, photo, userName) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.updateProfile({ displayName: `${userName}` }))
    .then(() => { const uid = firebase.auth().currentUser.uid; register(uid, photo, userName); })
    .catch(error => `Codígo de error: ${error.message}`);
}
