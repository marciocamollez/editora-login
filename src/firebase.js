import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Essa configuração é aquela que você obteve no quarto passo
// A mostrada a seguir é um exemplo. Não copie. Use a sua.
const config = {
    apiKey: "AIzaSyD4Ia6LU91Ycj8p57KRP1NEfvXTKrG7Mjk",
    authDomain: "teste-maujor.firebaseapp.com",
    projectId: "teste-maujor",
    storageBucket: "teste-maujor.appspot.com",
    messagingSenderId: "349157219560",
    appId: "1:349157219560:web:1b07dc49935de1f8347d5d"
};
firebase.initializeApp(config);
export default firebase;
