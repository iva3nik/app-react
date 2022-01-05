import React from 'react'
import s from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)
  return (
    <div className={s.FinishedQuiz}>
      <ul>
        { props.quizes.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            s[props.results[quizItem.id]]
          ]

          return (
            <li 
              key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        }) }
      </ul>

      <p>Правильно {successCount} из {props.quizes.length}</p>
      <div>
        <button onClick={props.onRetry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz