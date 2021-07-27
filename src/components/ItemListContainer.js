// React
import React, {useState, useEffect} from 'react';
// Components
import ItemList from './ItemList.js';
// React-router-dom
import {useParams} from 'react-router-dom'
// Estilo
import { Spin } from 'antd';
// firebase
import {getFirestore} from '../firebase'

function ItemListContainer(){
  const[productsData, setProductsData] = useState ([]);
  const categoryId = useParams()
  const [loading, setLoading] = useState(false)

  console.log(categoryId.categoryid)
  const getProducts = () => {
    if (categoryId.categoryid) {
      setLoading(true)
      const db = getFirestore();
      const productsCollection = db.collection("productos");
      productsCollection.where('category', '==', categoryId.categoryid).get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
          console.log('no results')
        } else{
          setProductsData(querySnapshot.docs.map(doc=>doc.data()))
        }
      }).catch(error=>{
        console.log('error',error)
      }).finally(()=>{
        setLoading(false)
      })
    } else {
      setLoading(true)
      const db = getFirestore();
      const productsCollection = db.collection("productos");
      productsCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
          console.log('no results')
        } else{
          setProductsData(querySnapshot.docs.map(doc=>doc.data()))
        }
      }).catch(error=>{
        console.log('error',error)
      }).finally(()=>{
        setLoading(false)
      })
    }
  }

  useEffect(()=>{
    getProducts()
  },[categoryId])

  console.log(productsData)


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
