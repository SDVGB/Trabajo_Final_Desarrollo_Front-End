  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getFirestore , collection, addDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJQnbBaTRtzu-JkhnUECtlV8v9XQllBJs",
    authDomain: "paginaweb-27c9e.firebaseapp.com",
    projectId: "paginaweb-27c9e",
    storageBucket: "paginaweb-27c9e.appspot.com",
    messagingSenderId: "560992014579",
    appId: "1:560992014579:web:f6f6fb3840dd5fbc79e786"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
 
  export const guardarConsulta = (_fecha, _email, _titulo, _descripcion, _genero) => 
    addDoc(collection(db, 'consulta'), {_fecha, _email, _titulo, _descripcion, _genero});

  export const odtenerConsulta = () => getDoc(collection(db, 'consulta'))

  export const nuevaConsulta = (callback) => onSnapshot(collection(db, 'consulta'), callback)
