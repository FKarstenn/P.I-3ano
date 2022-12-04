import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuckS9HcH2R8CIFC7Mio81JSyvR7Au0Ls",
  authDomain: "futanalises-2022.firebaseapp.com",
  projectId: "futanalises-2022",
  storageBucket: "futanalises-2022.appspot.com",
  messagingSenderId: "971085998811",
  appId: "1:971085998811:web:2ab702dc30c0a5fa6b7afe"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()


const PerfilCollection = db.collection('Perfil')

export{
 auth, db, PerfilCollection
} 