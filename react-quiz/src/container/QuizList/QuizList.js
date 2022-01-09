import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './QuizList.module.css'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

const QuizList = props => {
  const [quizes, setQuizes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const response = axios.get('/quizes.json')
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
          setIsLoading(false)
        })
        .catch(err => console.log(err))
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
        {
          isLoading
            ? <Loader />
            : <ul>
                {renderQuizes()}
              </ul>
        }
      </div>
    </div>
  )
}

export default QuizList