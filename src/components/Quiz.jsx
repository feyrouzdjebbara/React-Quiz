import React, { useCallback, useState } from 'react'
import questions from '../questions';

import Questions from './Questions';
import Summary from './Summary';

export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length 
    const finishQuiz = activeQuestionIndex === questions.length
   
    const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer]
    })


},[]) 

const handleSkipAnswer =useCallback(()=>{handleSelectAnswer(null)},handleSelectAnswer)
   

if (finishQuiz) {
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }
   


    return (
        <div id="quiz">
            <Questions 
             key={activeQuestionIndex}
             index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
