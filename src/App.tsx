import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType, } from "./types/quiz_types";
// import QuestionCard from "./Components/questionCard"
import Aa from "./Components/aa"

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentstep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [isResult,setIsResult]=useState(false)


  useEffect(() => {
    async function getData() {
      const questions: QuestionType[] = await getQuizDetails(3, "easy")
      // console.log(questions)
      setQuiz(questions)

    }
    getData();
  }, [])
  // let aa=quiz
  // console.log({ quiz })
  if (!quiz.length) {
    return <h3>Loading...</h3>

  }


  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault()

    const currentQuestion: QuestionType = quiz[currentstep];

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score)
    }
    console.log(`correct answer:${currentQuestion.correct_answer} & user answer:${userAns}`)
    if (currentstep !== quiz.length - 1){
      setCurrentStep(++currentstep)
    }
    else {
      // alert("score=" + score)
      setIsResult(true);
      // setCurrentStep(0)
      // setScore(0)
  }
}
if (isResult){
return <div><h1>Score: {score} out of {quiz.length}</h1></div>
}
return (
  <div className="App">
    <Aa
      options={quiz[currentstep].option}
      question={quiz[currentstep].question}
      callback={handleSubmit}
    />
  </div>
);
}

export default App;
