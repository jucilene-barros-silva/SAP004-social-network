
export const createPost = text => firebase.firestore().collection('posts').add({
  name: text,
  message: text,
  like: 0,
})
  .then(docRef => (('Document written with ID: ', docRef.id)))
  .catch(error => (('Error adding document: ', error)));


export const readPost = callback => firebase.firestore().collection('posts')
  .onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    console.log(callback(posts));
    callback(posts);
  });

export const deletePost = () => firebase.firestore().collection('posts').doc('uid').delete()
  .then(() => {
    console.log('Document successfully deleted!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });
