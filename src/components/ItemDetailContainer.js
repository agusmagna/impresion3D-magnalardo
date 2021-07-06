import React, {useState , useEffect}from 'react';
import ItemDetail from './ItemDetail.js'


const getItems =
  new Promise ((resolve, reject)=> {
      setTimeout(resolve(fetch('https://mocki.io/v1/92b80592-83fd-4932-8667-f7c4e2cb9335')), 2000)
      reject('error')
    })

function ItemDetailContainer ({productId}) {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    getItems.then(res => res.json()).then((data) => setProduct(data.find(element => element.id === productId)))
      },[])



console.log('product', product)
 return (
   <ItemDetail item = {product}/>

 )
}

export default ItemDetailContainer
