import React from 'react'
import s from './Drawer.module.css'

const Drawer = props => {
  const links = [
    1, 2, 3
  ]

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
        </li>
      )
    })
  }

  const cls = [s.Drawer]

  if (!props.isOpen) {
    cls.push(s.close)
  }

  return (
    <nav className={cls.join(' ')}>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
  )
}

export default Drawer