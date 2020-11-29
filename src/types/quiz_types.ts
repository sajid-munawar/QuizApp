import { type } from "os";

export type QuizType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuestionType ={
    question:string
    answer:string
    option:string[]

}
export type questonPropsType ={
    question:string
    options:string[]
}