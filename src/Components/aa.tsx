import React from 'react';
import {questonPropsType} from "./../types/quiz_types"
const Aa:React.FC<questonPropsType> = ({question, options}) => {
    console.log(question,options)
    return <div>
        <h1>Hello </h1>
    </div>
}
export default Aa;