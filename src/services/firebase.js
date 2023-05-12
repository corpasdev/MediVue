// Importa el paquete de Firebase
import firebase from 'firebase'

// Importa los servicios que necesitas de Firebase
import 'firebase/auth'; // Autenticación
import 'firebase/firestore'; // Base de datos en tiempo real
import 'firebase/storage'; // Almacenamiento de archivos

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_API_FIREBAS_EAUTHDOMAIN,
  projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_FIREBASE_APPID
}

// Inicializa la aplicación de Firebase
firebase.initializeApp(firebaseConfig)

// Exporta los servicios de Firebase que necesites
export const auth = firebase.auth();
export const DB = firebase.firestore();
export const STORAGE = firebase.storage();