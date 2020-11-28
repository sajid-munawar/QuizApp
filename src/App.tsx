import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {QuizType,} from "./types/quiz_types"

function App() {
  let [quiz,setQuiz]=useState<QuizType[]>([])
  useEffect (()=>{
    async function getData(){
      const questions:QuizType[]=await getQuizDetails(5,"easy")
      // console.log(questions)
      setQuiz(questions)

    }
    getData();
  },[])
  let aa=quiz
  console.log({aa})
  if (quiz.length<2){
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      {quiz[1].question}<br/>
      {quiz[1].difficulty}
      {/* {quiz[1].option} */}
    </div>
  );
}

export default App;
