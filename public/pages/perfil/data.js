export const perfilUser = (func) => {
  const user = firebase.auth().currentUser.uid;
  const postCollection = firebase.firestore().collection('users').doc(user);
  postCollection.onSnapshot((users) => {
    func(users);
  });
};

export const updateName = (newName) => {
  firebase.auth().currentUser.updateProfile({ nickName: newName });
};

export const updatePhoto = (newPhoto) => {
  firebase.auth().currentUser.updateProfile({ photoURL: newPhoto });
};
