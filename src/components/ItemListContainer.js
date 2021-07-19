// React
import React, {useState, useEffect} from 'react';
// Components
import ItemList from './ItemList.js';
// React-router-dom
import {useParams} from 'react-router-dom'
// Estilo
import { Spin } from 'antd';

function ItemListContainer(){
  const[productsData, setProductsData] = useState ([]);
  const categoryId = useParams()
  const [loading, setLoading] = useState(false)

  const getAllItems =
  new Promise ((resolve, reject)=> {
    setTimeout(resolve(fetch('https://mocki.io/v1/2bc1c9c2-747e-4843-af10-14075cdfcab8')), 2000)
    reject('error')
  })

  const products = () => {
    if(categoryId.categoryid){
      getAllItems.then(res => res.json()).then((data) => setProductsData(data.filter(element=>element.category=== categoryId.categoryid)))
  } else (
    getAllItems.then(res => res.json()).then((data) => setProductsData(data))
  )}
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false),2000)
    products()
  },[categoryId])

  if(loading){
    return <><div style={{ marginTop:'50px'}}><Spin/></div>
    <div><h2>Cargando...</h2></div></>
  }


  return(
    <div style={{ marginTop:'10px'}}>
      <ItemList productos = {productsData}/>
    </div>
  )
}

export default ItemListContainer
