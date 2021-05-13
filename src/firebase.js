import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyApW0gEhKT_-J9mT07ayTZnUlXdkGCB9-c",
  authDomain: "awesome-39d8e.firebaseapp.com",
  databaseURL: "https://awesome-39d8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesome-39d8e",
  storageBucket: "awesome-39d8e.appspot.com",
  messagingSenderId: "798588932949",
  appId: "1:798588932949:web:fb91a8e0ba876490c1d5dc",
  measurementId: "G-9M0X5DVX3W"
}
 
firebase.initializeApp(config)

export default firebase
  
export const database = firebase.database()