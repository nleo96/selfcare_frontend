import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBC4_H0XsdJmRl-oFmK_Suy8vZsoRd-7nM',
  authDomain: 'selfcare-web-ca450.firebaseapp.com',
  databaseURL: 'https://selfcare-web-ca450.firebaseio.com',
  projectId: 'selfcare-web-ca450',
  storageBucket: 'selfcare-web-ca450.appspot.com',
  messagingSenderId: '448387294722',
  appId: '1:448387294722:web:926ffcd49a68334db7a91b',
  measurementId: 'G-J6E048NK06'
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.authentication = firebase.auth();
    this.auth = firebase.auth.Auth;
  }

  doSignInWithEmailAndPassword = async (email, password) =>
    await this.authentication.signInWithEmailAndPassword(email, password);

  doSignInWithEmailAndPasswordPersistence = async (email, password) =>
    await this.authentication
      .setPersistence(this.auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(email, password);
      });

  doSignOut = async () => {
    window.localStorage.clear();
    await this.authentication.signOut();
  }    
}

export default new Firebase();
