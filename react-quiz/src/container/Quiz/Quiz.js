import React, {Component} from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

const Quiz = props => {
  const [activeQuestion, setActiveQuestion] = React.useState(0)
  const [answerState, setAnswerState] = React.useState(null)
  const [isFinished, setIsFinished] = React.useState(true)
  const [quizes, setQuizes] = React.useState([
    {
      id: 1,
      question: 'Какого цвета небо?',
      rightAnswerId: 2,
      answers: [
        {text: 'Чёрный', id: 1}, 
        {text: 'Синий', id: 2},
        {text: 'Красный', id: 3},
        {text: 'Зелёный', id: 4}
      ]
    },
    {
      id: 2,
      question: 'В каком году основали Санкт-Петербург?',
      rightAnswerId: 3,
      answers: [
        {text: '1700', id: 1},
        {text: '1702', id: 2},
        {text: '1703', id: 3},
        {text: '1803', id: 4}
      ]
    }
  ])

  const isQuizFinished = () => {
    return activeQuestion + 1 === quizes.length
  }

  const onAnswerClickHandler = (answerId) => {
    const question = quizes[activeQuestion]

    if (question.rightAnswerId === answerId) {

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
      setAnswerState({[answerId]: 'error'})
    }
  }
  
  return (
    <div className={s.Quiz}>
      <div className={s.QuizWrapper}>
        <h1>Ответить на все вопросы</h1>
        {
          isFinished
            ? <FinishedQuiz
            
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