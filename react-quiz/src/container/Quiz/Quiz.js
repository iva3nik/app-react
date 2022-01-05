import React, {Component} from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

const Quiz = props => {
  const [listAnswers, setListAnswers] = React.useState([
    {text: 'Вопрос 1'},
    {text: 'Вопрос 2'},
    {text: 'Вопрос 3'},
    {text: 'Вопрос 4'}
  ])
  
  return (
    <div className={s.Quiz}>
      <div className={s.QuizWrapper}>
        <h1>Ответить на все вопросы</h1>
        <ActiveQuiz
          answers={listAnswers}
        />
      </div>
    </div>
  )
}

export default Quiz