import React from 'react'
import quizlogo from '../assets/quiz-logo.png'
export default function Header() {
  return (
    <header>
        <img src={quizlogo} alt="quiz-logo"/>
        <h1>React Quiz by Feyrouz Djb</h1>
    </header>
  )
}
