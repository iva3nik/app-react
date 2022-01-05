import React from 'react'
import s from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  return (
    <div className={s.ActiveQuiz}>
      <p className={s.Question}>
        <span>
          <strong>{props.answerNumber}</strong>&nbsp;
          {props.question}
        </span>

        <small>{props.answerNumber} from {props.quizLength}</small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz