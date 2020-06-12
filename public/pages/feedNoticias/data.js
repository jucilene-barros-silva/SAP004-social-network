
export const createPost = (text) => {
  firebase.firestore().collection('posts').add({
    name: text,
    like: 0,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};


export const readPost = (callBack) => {

  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      console.log(callBack(posts));
      callBack(posts);
    });
};
