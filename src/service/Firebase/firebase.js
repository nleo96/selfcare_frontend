import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  //
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  doSignInWithEmailAndPassword = async (email, password) =>
    await this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = async () => await this.auth.signOut();
}

export default new Firebase();
