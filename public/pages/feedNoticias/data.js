
export const createPost = (text, locked) => firebase.firestore().collection('posts').add({
  id: firebase.auth().currentUser.uid,
  name: firebase.auth().currentUser.displayName,
  message: text,
  like: 0,
  data: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
  locked,
  // howLiked: firebase.firestore.FieldValue(firebase.auth().currentUser.uid),
})
  .then(docRef => (docRef.id));

export const readPost = callback => firebase.firestore().collection('posts').orderBy('data', 'desc')
  .onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      if (!doc.data().locked || doc.data().id === firebase.auth().currentUser.uid) {
        posts.push({ postId: doc.id, ...doc.data() });
      }
    });
    callback(posts);
  });


export function addLike(uidPost) {
  const likes = firebase.firestore().collection('posts').doc(uidPost);
  likes.update({
    like: firebase.firestore.FieldValue.increment(1),
    howLiked: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid),
  }).then(() => {
    console.log('Dei like');
  });
}

export function deletePost(uidPost) {
  firebase.firestore().collection('posts').doc(uidPost).delete();
}
