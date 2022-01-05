import React from 'react'
import s from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  return (
    <ul className={s.AnswersList}>
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList