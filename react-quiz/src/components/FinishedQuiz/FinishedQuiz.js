import React from 'react'
import s from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
  return (
    <div className={s.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={'fa fa-times ' + s.error} />
        </li>
        <li>
          <strong>2. </strong>
          How are you?
          <i className={'fa fa-check ' + s.success} />
        </li>
      </ul>

      <p>Правильно 4 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz