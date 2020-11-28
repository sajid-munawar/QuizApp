import React, { useEffect } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service"

function App() {
  useEffect (()=>{
    async function getData(){
      const results=await getQuizDetails(5,"easy")
      console.log(results)

    }
    getData();
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
