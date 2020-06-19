
export const createPost = text => firebase.firestore().collection('posts').add({
  id: firebase.auth().currentUser.uid,
  name: firebase.auth().currentUser.displayName,
  message: text,
  like: 0,
  data: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
  privado: 'falso',
})
  .then(docRef => (docRef.id));

export const readPost = callback => firebase.firestore().collection('posts').orderBy('data', 'desc')
  .onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ postId: doc.id, ...doc.data() });
    });
    console.log(callback(posts));
    callback(posts);
  });

export function addLike(uidPost) {
  const likes = firebase.firestore().collection('posts').doc(uidPost);
  likes.update({
    like: firebase.firestore.FieldValue.increment(1),
  }).then(() => {
    console.log('Dei like');
  });
}

// export function currentUser(name) {
//   let userInfo;
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       userInfo = { uid: firebase.auth().currentUser.uid, name: firebase.auth().currentUser.displayName };
//       name(firebase.auth().currentUser.displayName);
//     }
//     console.log(userInfo);
//   });

//   return userInfo;
// }
