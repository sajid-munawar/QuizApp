import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {QuizType,} from "./types/quiz_types"

function App() {
  let [quiz,setQuiz]=useState<QuizType[]>([])
  useEffect (()=>{
    async function getData(){
      const questions:QuizType[]=await getQuizDetails(5,"easy")
      console.log(questions)
      setQuiz(questions)

    }
    getData();
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
