import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD7dPECki9bo8phJUWBGQtv4ughD0f3kSQ',
  authDomain: 'vue-login-b1f7b.firebaseapp.com',
  databaseURL: 'https://vue-login-b1f7b.firebaseio.com',
  projectId: 'vue-login-b1f7b',
  storageBucket: 'vue-login-b1f7b.appspot.com',
  messagingSenderId: '723760966084',
};

const app = firebase.initializeApp(config);

export default app;
