import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import Logo from '../images/logo.png';
import ItemDetailContainer from './ItemDetailContainer.js'

const productsInfo = [{
  id: 101,
  title: 'Producto X',
  description: 'es una descripción',
  price: 1000,
  pictureUrl: Logo,
},{
  id: 102,
  title: 'Producto Y',
  description: 'es una descripción',
  price: 1500,
  pictureUrl: Logo,
}];


function ItemListContainer ({mensaje}){
  const[productsData, setProductsData] = useState ([]);

  useEffect(()=> {
    new Promise ((resolve, reject)=> {
      setTimeout(resolve(productsInfo), 2000)
      reject('error')
    }).then(resolve=>setProductsData(resolve)).catch(error=>console.log('error',error))
  })
  return(
    <div>
      <h1> {mensaje} </h1>
      <ItemCount stock={5} initial={1} />
      <ItemList productos = {productsData}/>
      <h1>próximo desafio </h1>
      <ItemDetailContainer productId = {5}/>
    </div>
  )
}

export default ItemListContainer
