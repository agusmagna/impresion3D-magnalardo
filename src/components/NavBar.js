// React
import React from 'react'
// Estilo
import { Menu } from 'antd';
// Components
import CartWidget from './CartWidget.js'
// React-router-dom
import {Link} from 'react-router-dom'


const { SubMenu } = Menu;
const categories = [
  {categoryName:'Decoración',
  categoryId:'deco'},
  {categoryName:'Organizadores',
    categoryId:'organizadores'},
  {categoryName:'Repuestos',
   categoryId:'repuestos'}]


function NavBar() {
  return(
  <div className ="menu-options" style={{ marginBottom: '20'}}>
    <Link to={`/`}><img src='images/logo.png' alt='logo' style={{ width: 100, margin:'auto', padding:10}}/> </Link>
    <Menu mode="horizontal">
      <Menu.Item key="products"> <Link to={`/`}>Productos</Link></Menu.Item>
      <SubMenu key="SubMenu" title="Categorias">
      {categories.map((category)=>
        <Menu.Item key={category.categoryId}> <Link to={`/category/${category.categoryId}`}>{category.categoryName}</Link></Menu.Item>
      )}
      </SubMenu>
      <Menu.Item key="CartWidget"> <Link to={`/cart`}><CartWidget/> </Link></Menu.Item>
    </Menu>
  </div>
)
}

export default NavBar
