import React, {useState} from 'react'
import s from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import { createControl } from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'

const QuizCreator = props => {
  const createFormControls = () => {
    return {
      question: createControl({
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым'
      }, {required: true}),
      option1: createOptionControl(1),
      option2: createOptionControl(2),
      option3: createOptionControl(3),
      option4: createOptionControl(4)
    }
  }

  const createOptionControl = (number) => {
    return createControl({
      label: `Вариант ${number}`,
      errorMessage: 'Значение не может быть пустым',
      id: number
    }, {required: true})
  }

  const [quiz, setQuiz] = useState([])
  const [formControls, setFormControls] = useState(createFormControls())
  const [rigthAnswer, setRightAnswer] = useState(1)

  const changeHandler = (value, controlName) => {

  }

  const renderControls = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </React.Fragment>
      )
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const addQuestionHandler = () => {

  }

  const createQuizHandler = () => {

  }

  const selectChangeHandler = (e) => {
    setRightAnswer(+e.target.value)
  }

  const select = <Select
    label="Выберите правильный ответ"
    value={rigthAnswer}
    onChange={selectChangeHandler}
    options={[
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
      {text: 4, value: 4},
    ]}
  />

  return (
    <div className={s.QuizCreator}>
      <div>
        <h1>Quiz Creator</h1>

        <form onSubmit={submitHandler}>

          {renderControls()}

          { select }

          <Button
            type='primary'
            onClick={addQuestionHandler}
          >
            Добавить вопрос
          </Button>
          <Button
            type='success'
            onClick={createQuizHandler}
          >
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}

export default QuizCreator