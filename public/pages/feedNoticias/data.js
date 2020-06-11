
export const createPost = (text) => {
  firebase.batchcollection('posts').add({
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

// firebase.collection('cities').where('state', '==', 'CA')

export const readPost = (callBack) => {
  firebase.collection('post')
    .onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });

      callBack(posts);
    });
};
