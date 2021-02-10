import React from 'react';

//import firebase from './firebaseServices/services'

import { requestPermission } from "./firebaseServices/services";

function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <button onClick={requestPermission}>Configure Token</button>
    </div>
  );
}

export default App;
