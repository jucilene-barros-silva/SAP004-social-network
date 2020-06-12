
export const createPost = text => firebase.firestore().collection('posts').add({
  name: text,
  like: 0,
})
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .then(docRef => (('Document written with ID: ', docRef.id)))
    .catch(error => (('Error adding document: ', error)));
};


export const readPost = callback => firebase.firestore().collection('posts')
  .onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    callback(posts);
  });
