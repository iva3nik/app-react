import React from 'react'
import s from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  return (
    <div className={s.ActiveQuiz}>
      <p className={s.Question}>
        <span>
          <strong>2.</strong>&nbsp;
          How are you?
        </span>
    
        <small>4 from 12</small>
      </p>
    
      <AnswersList
        answers={props.answers}
      />
    </div>
  )
}

export default ActiveQuiz