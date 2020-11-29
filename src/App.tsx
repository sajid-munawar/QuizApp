import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {QuizType,} from "./types/quiz_types";
// import QuestionCard from "./Components/questionCard"
import Aa from "./Components/aa"

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
  // let aa=quiz
  console.log({quiz})
  if (quiz.length<2){
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Aa/>
    </div>
  );
}

export default App;
