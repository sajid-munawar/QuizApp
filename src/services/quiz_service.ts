// import React from 'react';
import { QuizType, QuestionType } from "../types/quiz_types"
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuestions: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    const quiz: QuestionType[] = results.map((questionObj: QuizType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    // console.log(results)
    return quiz

    // console.log(data.results[1].question)
    // console.log(data.results[1].correct_answer)
    // console.log(data.results[1].incorrect_answers)
}
