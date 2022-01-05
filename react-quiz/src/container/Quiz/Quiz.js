import React, {Component} from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

const Quiz = props => {
  const [question, setQuestion] = React.useState('Какого цвета небо?')
  const [listAnswers, setListAnswers] = React.useState([
    {text: 'Чёрный', id: 1},
    {text: 'Синий', id: 2},
    {text: 'Красный', id: 3},
    {text: 'Зелёный', id: 4}
  ])
  const [rightAnswerId, setRightAnswerId] = React.useState(2)

  const onAnswerClickHandler = (answerId) => {
    console.log(answerId)
  }
  
  return (
    <div className={s.Quiz}>
      <div className={s.QuizWrapper}>
        <h1>Ответить на все вопросы</h1>
        <ActiveQuiz
          answers={listAnswers}
          question={question}
          onAnswerClick={onAnswerClickHandler}
        />
      </div>
    </div>
  )
}

export default Quiz