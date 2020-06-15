
function register(uid, fullName, userName) {
  const db = firebase.firestore();
  const authUid = firebase.auth().currentUser.uid;
  db.collection('users').doc(authUid).set({
    userUid: uid,
    name: fullName,
    nickName: userName,
  });
}

export function createUser(email, password, fullName, userName) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.updateProfile({ displayName: `${userName}` }))
    .then(() => { const uid = firebase.auth().currentUser.uid; register(uid, fullName, userName); })
    .catch(error => `Codígo de error: ${error.message}`);
}
