import React from 'react'
import quizComplete from '../assets/quiz-complete.png'
import questions from '../questions'
export default function Summary({userAnswers}) {
const skippedAnswers=userAnswers.filter((answer)=> answer === null)
const correctAnswers=userAnswers.filter((answer ,index)=>questions[index].answers[0] === answer )
const wrongAnswers=userAnswers.filter((answer ,index)=>questions[index].answers[0] !== answer && answer !==null)

  return (
    <div id="summary">
                <img src={quizComplete} alt="quiz-complete" />
                <h2>QUIZ Completed</h2>
                <div id="summary-stats">
                    <p>
                        <span className="number">{(skippedAnswers.length * 100 / userAnswers.length).toFixed(1)}%</span>
                        <span className="text">Skipped</span>
                    </p>
                    <p>
                        <span className='number'>{(correctAnswers.length * 100 / userAnswers.length).toFixed(1)}%</span>
                        <span className='text'>answered correctly</span>
                    </p>
                    <p>
                        <span className='number'>{(wrongAnswers.length * 100 / userAnswers.length).toFixed(1)}%</span>
                        <span className='text'>answered incorrectly</span>
                    </p>

                </div>
                <ol>
                {userAnswers.map((answer ,index)=> {
                    let cssClass ="user-answer"
                    if(answer === null){
                        cssClass += " skipped" 
                    }
                    else if (answer === questions[index].answers[0]){
                        cssClass += " correct"
                    }
                    else{
                        cssClass += " wrong"
                    }
                    return(
                        <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{questions[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                    )
                    
                } )}
                    
                </ol>
            </div>
  )
}
