import React from 'react'
import s from './Button.module.css'

const Button = props => {
  const cls = [
    s.Button,
    s[props.type]
  ]

  return (
    <button
      className={cls.join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
