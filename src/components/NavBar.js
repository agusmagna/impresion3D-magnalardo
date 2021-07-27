// React
import React, {useState, useEffect} from 'react'
// Estilo
import { Menu } from 'antd';
// Components
import CartWidget from './CartWidget.js'
// React-router-dom
import {Link} from 'react-router-dom'
// firebase
import {getFirestore} from '../firebase'


const { SubMenu } = Menu;



function NavBar() {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    const db = getFirestore();
    const categoryCollection = db.collection("categories");
    categoryCollection.get().then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log('no results')
      } else{
        setCategories(querySnapshot.docs.map(doc=>doc.data()))
      }
    }).catch(error=>{
      console.log('error',error)
    })
  }
  useEffect(()=>{
    getCategories();
      },[])

  console.log('categories',categories)
  return(
  <div className ="menu-options" style={{ marginBottom: '20'}}>
    <Link to={`/`}><img src='https://firebasestorage.googleapis.com/v0/b/magnalardo-fav3d.appspot.com/o/logo.png?alt=media&token=a904a86f-1638-47bf-a469-69c192099d7c' alt='logo' style={{ width: 100, margin:'auto', padding:10}}/> </Link>
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
