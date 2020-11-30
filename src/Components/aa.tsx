import React, { useState } from 'react';
import { questonPropsType } from "./../types/quiz_types"
const Aa: React.FC<questonPropsType> = ({ question, options, callback }) => {
    // console.log(question, options)

    let [selectedAns, setSelectedAns] = useState("")

    const handleSelection = (ev: any) => {
        // console.log(ev.target.value);
        setSelectedAns(ev.target.value)
    }

    return <div className="question-container">
        <div className="question">
            <h4>{question}</h4>
        </div>
        <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
        className="question-form"
        >
            {options.map((opt: string, ind: number) => {
                return <div key={ind}>
                    <label className="radio">
                        <input
                            type="radio"
                            name="opt"
                            required
                            checked={selectedAns === opt}
                            value={opt}
                            onChange={handleSelection}
                        />
                        {opt}

                    </label>
                </div>
            })}
            <input type="submit" className="submit" />
        </form>
    </div>
}
export default Aa;