import React from 'react'
import s from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
  <div className={s.ActiveQuiz}>
    <p className={s.Question}>
      <span>
        <strong>2.</strong>&nbsp;
        How are you?
      </span>

      <small>4 from 12</small>
    </p>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)

export default ActiveQuiz