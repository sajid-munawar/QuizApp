// import React from 'react';
export const getQuizDetails=async (totalQuestions:number,level:string)=>{
    const res=await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let {results}=await res.json();
    // console.log(results)
    return results

    // console.log(data.results[1].question)
    // console.log(data.results[1].correct_answer)
    // console.log(data.results[1].incorrect_answers)
}
