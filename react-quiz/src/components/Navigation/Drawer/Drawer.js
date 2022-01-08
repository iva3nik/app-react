import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const Drawer = props => {
  const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
  ]

  const clickHandler = () => {
    props.onClose()
  }

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact.toString()}
            activeclassname={s.active}
            onClick={clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    }) 
  }

  const cls = [s.Drawer]

  if (!props.isOpen) {
    cls.push(s.close)
  }

  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {renderLinks()}
        </ul>
      </nav>
      { props.isOpen ? <Backdrop onClick={props.onClose} /> : null }
    </>
  )
}

export default Drawer