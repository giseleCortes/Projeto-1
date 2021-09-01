import firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyBW1pt_ttZ8oqzmL7OS_FZxEQLDziEgj_E",
  authDomain: "gih-projeto-1.firebaseapp.com",
  projectId: "gih-projeto-1",
  storageBucket: "gih-projeto-1.appspot.com",
  messagingSenderId: "605546615046",
  appId: "1:605546615046:web:ac8ea79c2da8c801740e87"
};

export default firebase.getApps.length ? firebase.app() : firebase.initializeApp(firebaseConfig)


//default não é uma boa pratica, verificar uma solução melhor depois 