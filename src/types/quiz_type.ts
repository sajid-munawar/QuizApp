import { type } from "os";

export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type Quiz ={
    question:string
    answer:string
    option:string[]

}