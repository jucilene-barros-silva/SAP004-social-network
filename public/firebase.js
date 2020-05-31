
const firebaseConfig = {
  apiKey: 'AIzaSyAujpvf2u9ejdy6AsEh93kj-3yQKDmNUQs',
  authDomain: 'social-network-4801d.firebaseapp.com',
  databaseURL: 'https://social-network-4801d.firebaseio.com',
  projectId: 'social-network-4801d',
  storageBucket: 'social-network-4801d.appspot.com',
  messagingSenderId: '997757047914',
  appId: '1:997757047914:web:e88c4fb558eeef8f116613',
};
// Initialize Firebase
export const init = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
