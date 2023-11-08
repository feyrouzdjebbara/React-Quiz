import React, { useRef } from 'react'


export default function Answers({answers,selectedAnswer,answerState,onSelect }) {
    
    const shuffledInswers=useRef();
    if(!shuffledInswers.current){
        shuffledInswers.current =[...answers]
       
       shuffledInswers.current.sort(() => Math.random() - 0.5)
       }
       console.log("shuffledInswers",shuffledInswers.current )
    return (
    <ul id="answers">
   
        {shuffledInswers.current.map(answer =>
        {
            const isSelected =selectedAnswer=== answer;
            let cssClass='';
            if(answerState==="answered" && isSelected ){
                cssClass='selected'
           } else if((answerState==="correct" || answerState ==="wrong")&& isSelected){
              cssClass=answerState;
            }
            return (
            <li key={answer} className='answer'>
                <button 
                className={cssClass}
                onClick={() => onSelect(answer)}
                disabled={answerState !== ''}
                > {answer}
                </button>
            </li>)
        })}
    </ul>
  )
}
