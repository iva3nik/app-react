import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './QuizList.module.css'

const QuizList = props => {
  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li
          key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className={s.QuizList}>
      <div>
        <h1>Список тестов</h1>

        <ul>
          {renderQuizes()}
        </ul>
      </div>
    </div>
  )
}

export default QuizList