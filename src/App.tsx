import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {QuestionType,} from "./types/quiz_types";
// import QuestionCard from "./Components/questionCard"
import Aa from "./Components/aa"

function App() {
  let [quiz,setQuiz]=useState<QuestionType[]>([])
  useEffect (()=>{
    async function getData(){
      const questions:QuestionType[]=await getQuizDetails(5,"easy")
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
      <Aa
      option={quiz[0].option}
      question={quiz[0].question }
      />
    </div>
  );
}

export default App;
