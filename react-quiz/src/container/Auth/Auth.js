import React from 'react'
import s from './Auth.module.css'
import Button from '../../components/UI/Button/Button'

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
          <input type='text' />
          <input type='text' />

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