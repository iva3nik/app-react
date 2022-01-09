import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './QuizList.module.css'
import axios from 'axios'

const QuizList = props => {
  const [quizes, setQuizes] = useState([])

  useEffect(() => {
    const response = axios.get('https://quiz-react-c5b2b-default-rtdb.firebaseio.com/quizes.json')
      response
        .then((res) => {
          const quizesList = []
          Object.keys(res.data).forEach((key, index) => {
            quizesList.push({
              id: key,
              name: `Test N${index + 1}`
            })
          })
          setQuizes(quizesList)
        })
  }, [])

  const renderQuizes = () => {
    return quizes.map((quiz) => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
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