// import firebase from 'firebase';
function teste() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAq2EG71JxIFqQGR7FswKlJf3sU3SFZsLY',
    authDomain: 'social-network-d6767.firebaseapp.com',
    databaseURL: 'https://social-network-d6767.firebaseio.com',
    projectId: 'social-network-d6767',
    storageBucket: 'social-network-d6767.appspot.com',
    messagingSenderId: '901021817860',
    appId: '1:901021817860:web:b84c9c4534ae8053e82951',
  };

  return firebaseConfig;
}
// firebase.initializeApp(firebaseConfig);
// firebase.auth();
// firebase.firestore();

if (!firebase.apps.length) {
  firebase.initializeApp(teste);
}
