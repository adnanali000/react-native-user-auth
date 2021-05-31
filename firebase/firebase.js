import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpl5grDTVl1-_3pwtMpwENH_PPoRA6jDA",
    authDomain: "react-native-auth-43eb0.firebaseapp.com",
    projectId: "react-native-auth-43eb0",
    storageBucket: "react-native-auth-43eb0.appspot.com",
    messagingSenderId: "252598058562",
    appId: "1:252598058562:web:3d36af5ab369035431b7db"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;