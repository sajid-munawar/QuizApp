import React from 'react';
import { questonPropsType } from "./../types/quiz_types"
const Aa: React.FC<questonPropsType> = ({ question, options,callback }) => {
    console.log(question, options)
    return <div className="queston-container">
        <div className="question">
            {question}
        </div>
        <form onSubmit={callback}>
            {options.map((opt: string, ind: number) => {
                return <div key={ind}>
                    <label >
                        <input type="radio"
                            name="opt"
                            value={opt} />
                        {opt}

                    </label>
                </div>
            })}
            <input type="submit" />
        </form>
    </div>
}
export default Aa;