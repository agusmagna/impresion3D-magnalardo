import React, {useState , useEffect}from 'react';
import ItemDetail from './ItemDetail.js'
import {useParams} from 'react-router-dom'

const getItems =
  new Promise ((resolve, reject)=> {
      setTimeout(resolve(fetch('https://mocki.io/v1/2bc1c9c2-747e-4843-af10-14075cdfcab8')), 2000)
      reject('error')
    })

function ItemDetailContainer () {
  const [product, setProduct] = useState([])
  const productId = useParams();

  const getItem = () => {
    getItems.then(res => res.clone().json()).then((data) => setProduct(data.find(element => element.id === productId.itemid)))
  }

  useEffect(()=>{
    getItem();
      },[])



console.log('product', product)
 return (
   <ItemDetail item = {product}/>

 )
}

export default ItemDetailContainer
