import React from 'react'
import s from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

const Auth = props => {
  const loginHandler = () => {

  }

  const registerHandler = () => {

  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.Auth}>
      <div>
        <h1>Авторизация</h1>

        <form onSubmit={submitHandler} className={s.AuthForm}>
          <Input
            label="Email"
          />
          <Input
            label='Пароль'
            errorMessage='test'
          />

          <Button
            type='success'
            onClick={loginHandler}
          >
            Войти
          </Button>
          <Button
            type='primary'
            onClick={registerHandler}
          >
            Зарегестрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Auth