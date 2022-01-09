import React from 'react'
import { useParams } from 'react-router-dom'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

const Quiz = props => {
  const { id } = useParams()
  const [activeQuestion, setActiveQuestion] = React.useState(0)
  const [answerState, setAnswerState] = React.useState(null)
  const [isFinished, setIsFinished] = React.useState(false)
  const [resultsQuiz, setResultsQuiz] = React.useState({})
  const [quizes, setQuizes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const response = axios.get(`/quizes/${id}.json`)
      response
        .then((res) => {
          setQuizes(res.data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
  }, [])

  const isQuizFinished = () => {
    return activeQuestion + 1 === quizes.length
  }

  const onAnswerClickHandler = (answerId) => {
    const question = quizes[activeQuestion]
    const results = resultsQuiz

    if (question.rightAnswerId === answerId) {
      if (!results[question.id])  {
        results[question.id] = 'success'
        setResultsQuiz(results)
      }

      setAnswerState({[answerId]: 'success'})

      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true)
        } else {
          setActiveQuestion(activeQuestion + 1)
          setAnswerState(null)
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      results[question.id] = 'error'
      setResultsQuiz(results)
      setAnswerState({[answerId]: 'error'})
    }
  }

  const retryHandler = () => {
    setActiveQuestion(0)
    setAnswerState(null)
    setIsFinished(false)
    setResultsQuiz({})
  }
  
  return (
    <div className={s.Quiz}>
      <div className={s.QuizWrapper}>
        <h1>Ответить на все вопросы</h1>

        {
          isLoading
            ? <Loader />
            : isFinished
              ? <FinishedQuiz
                  results={resultsQuiz}
                  quizes={quizes}
                  onRetry={retryHandler}
                />
              : <ActiveQuiz
                  answers={quizes[activeQuestion].answers}
                  question={quizes[activeQuestion].question}
                  onAnswerClick={onAnswerClickHandler}
                  quizLength={quizes.length}
                  answerNumber={activeQuestion + 1}
                  state={answerState}
                />
        }
      </div>
    </div>
  )
}

export default Quiz