import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSLy9mmRyclLpXMQ4zgaQm5mTeyC8JvNyaT8",
  authDomain: "chatApp-99bbf.firebase.com",
  databaseURL: "https://firebase.firebaseio.com",
  projectId: "chatApp-99bbf",
  storageBucket: "chatApp-99bbf.appspot.com",
  appId: "1:174289767154:android:0fb598b9d1c6aa0106f560",
};

export default Firebase.initializeApp(firebaseConfig);
