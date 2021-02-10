import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNPdPJS-0VtwgHVLi2mrymIS807zQWLCc",
    authDomain: "quiz-pwa-84457.firebaseapp.com",
    projectId: "quiz-pwa-84457",
    storageBucket: "quiz-pwa-84457.appspot.com",
    messagingSenderId: "356220240019",
    appId: "1:356220240019:web:1d79692d20bfd66e9fcd66"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function requestPermission() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}
//export default requestPermission;
//export default firebase;
