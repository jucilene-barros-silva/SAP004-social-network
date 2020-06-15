
// export function addUser(uid) {
//   firebase.firestore().collection('users').doc(uid).set({
//     fullName: 'milena ferrrazzz',
//     userName: 'mileninha',
//   })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
// }

export function createUser(email, password, fullName, userName) {
  const auth = firebase.auth();
  const db = firebase.firestore().collection('users');
  auth.createUserWithEmailAndPassword(email, password)
    .then(el => db.doc(el.user.uid).set({
      nickname: userName,
      namefull: fullName,
    })).then(() => '??????')
    .catch(error => `Codígo de error: ${error.message}`);
}
