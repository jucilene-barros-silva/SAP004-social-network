
export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const emails = user.email;
      const passwords = user.password;
      return (emails, passwords);
    });
}
