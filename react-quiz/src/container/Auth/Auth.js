import React, {useState} from 'react'
import s from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import axios from 'axios'

const Auth = props => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [formControls, setFormControls] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Введите корректный email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Пароль',
      errorMessage: 'Введите корректный пароль',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  })

  const loginHandler = async () => {
    const authData = {
      email: formControls.email.value,
      password: formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyCvle_QKdZA720KX_YCIys1JixsV1EdD6c]', authData)
    } catch (e) {
      console.log(e)
    }
  }

  const registerHandler = async () => {
    const authData = {
      email: formControls.email.value,
      password: formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCvle_QKdZA720KX_YCIys1JixsV1EdD6c]', authData)
    } catch (e) {
      console.log(e)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateControl = (value, validation) => {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  const onChangeHandler = (e, controlName) => {
    const formControlsCopy = { ...formControls }
    const control = { ...formControlsCopy[controlName] }

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    formControlsCopy[controlName] = control

    let isFormValid = true

    Object.keys(formControlsCopy).forEach(name => {
      isFormValid = formControlsCopy[name].valid && isFormValid
    })

    setFormControls(formControlsCopy)
    setIsFormValid(isFormValid)
  }

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={(e) => onChangeHandler(e, controlName)}
        />
      )
    })
  }

  return (
    <div className={s.Auth}>
      <div>
        <h1>Авторизация</h1>

        <form onSubmit={submitHandler} className={s.AuthForm}>
          {renderInputs()}

          <Button
            type='success'
            onClick={loginHandler}
            disabled={!isFormValid}
          >
            Войти
          </Button>
          <Button
            type='primary'
            onClick={registerHandler}
            disabled={!isFormValid}
          >
            Зарегестрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Auth