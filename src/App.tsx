import React, { useEffect } from 'react';
import { requestPermission } from "./firebaseServices/services";

function App() {
  
  useEffect(()=>{
    requestPermission()
  },[])

  return (
    <div className="App">
     <h1>Quiz-app PWA</h1>
    </div>
  );
}

export default App;
