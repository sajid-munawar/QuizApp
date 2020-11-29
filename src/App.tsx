import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType, } from "./types/quiz_types";
// import QuestionCard from "./Components/questionCard"
import Aa from "./Components/aa"

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentstep, setCurrentStep] = useState(0)


  useEffect(() => {
    async function getData() {
      const questions: QuestionType[] = await getQuizDetails(5, "easy")
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
  const handleSubmit = (e: React.FormEvent<EventTarget>,userAns:string) => {
    e.preventDefault()
    console.log(userAns)
    if (currentstep !== quiz.length - 1)
      setCurrentStep(++currentstep)
    else {
      setCurrentStep(0)
    }
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
