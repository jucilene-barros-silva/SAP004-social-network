
export const createPost = (text, locked) => firebase.firestore().collection('posts').add({
  id: firebase.auth().currentUser.uid,
  name: firebase.auth().currentUser.displayName,
  message: text,
  like: 0,
  data: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
  locked,
  whoLiked: [],
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

<<<<<<< HEAD
const updateLike = (likes, whoLiked, uidPost) => {
  firebase.firestore().collection('posts').doc(uidPost).update({
    like: likes,
    whoLiked,
  })
    .then(() => {
      console.log('Dei like');
    });
};

// export function addLike(uidPost) {
//   const likes = firebase.firestore().collection('posts').doc(uidPost);
//   likes.update({
//     like: firebase.firestore.FieldValue.increment(1),
//     whoLiked: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid),
//   }).then(() => {
//     console.log('Dei like');
//   });
// }

=======
>>>>>>> milena
export function deletePost(uidPost) {
  firebase.firestore().collection('posts').doc(uidPost).delete();
}

const updateLike = (likes, whoLiked, uidPost) => {
  firebase.firestore().collection('posts').doc(uidPost).update({
    like: likes,
    whoLiked,
  });
};

export function addLike(uidPost, user) {
  firebase.firestore().collection('posts').doc(uidPost).get()
    .then((doc) => {
      const whoLiked = doc.data().whoLiked;
      let likes = doc.data().like;
      if (whoLiked.includes(user)) {
        likes = firebase.firestore.FieldValue.increment(-1);
        const index = whoLiked.findIndex(elem => elem === user);
        whoLiked.splice(index, 1);
      } else {
        likes = firebase.firestore.FieldValue.increment(1);
        whoLiked.push(user);
      }
      updateLike(likes, whoLiked, uidPost);
    });
}
