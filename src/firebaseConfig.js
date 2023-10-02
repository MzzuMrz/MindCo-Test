import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9j1GVGVBSaiKvyy0AbdZkU_YJ6kb_y9E",
  authDomain: "mindco-test.firebaseapp.com",
  projectId: "mindco-test",
  storageBucket: "mindco-test.appspot.com",
  messagingSenderId: "922291109034",
  appId: "1:922291109034:web:6eebed220cf91cab1264d3",
  measurementId: "G-7PH1R74GSE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
