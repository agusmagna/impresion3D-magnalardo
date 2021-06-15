import React from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import CartWidget from './CartWidget.js'

function NavBar() {
  return(
  <div className ="menu-options">
    <Menu mode="horizontal">
      <Menu.Item key="conocenos"> Conocenos</Menu.Item>
      <Menu.Item key="Productos"> Productos</Menu.Item>
      <Menu.Item key="Contacto"> Contacto</Menu.Item>
      <Menu.Item key="CartWidget"> <CartWidget/> </Menu.Item>
    </Menu>
  </div>
)
}

export default NavBar