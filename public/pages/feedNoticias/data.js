
export const createPost = text => firebase.firestore().collection('posts').add({
  id: firebase.auth().currentUser.uid,
  name: firebase.auth().currentUser.displayName,
  message: text,
  like: 0,
  data: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
  privado: 'falso',
  howLiked: firebase.firestore.FieldValue(firebase.auth().currentUser.uid),

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

// export function getUser() {
//   const userUid = firebase.auth().currentUser.uid;
//   const userName = firebase.auth().currentUser.displayName;
//   return(userUid, userName)
// }
export function addLike(uidPost) {
  const likes = firebase.firestore().collection('posts').doc(uidPost);
  likes.update({
    like: firebase.firestore.FieldValue.increment(1),
    howLiked: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid),
  }).then(() => {
    console.log('Dei like');
  });
}

<<<<<<< Updated upstream
export function deletePost(uidPost) {
  firebase.firestore().collection('posts').doc(uidPost).delete();
=======
export function toggleStar(uidPost, uid) {
  uidPost.transaction((post) => {
    if (post) {
      if (post.like && post.like[uid]) {
        post.like--;
        post.like[uid] = null;
      } else {
        post.like++;
        if (!post.like) {
          post.like = {};
        }
        post.like[uid] = true;
      }
    }
    return post;
  });
}

export function currentUser(name) {
  let userInfo;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userInfo = { uid: firebase.auth().currentUser.uid, name: firebase.auth().currentUser.displayName };
      return userInfo;
      console.log(userInfo);
    }
  });


>>>>>>> Stashed changes
}
