import React from 'react'
import s from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

const Layout = props => {
  const [menu, setMenu] = React.useState(false)
  const toggleMenuHandler = () => {
    setMenu(!menu)
  }

  return(
    <div className={s.Layout}>
      <Drawer
        isOpen={menu}
      />

      <MenuToggle
        onToggle={toggleMenuHandler}
        isOpen={menu}
      />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout
