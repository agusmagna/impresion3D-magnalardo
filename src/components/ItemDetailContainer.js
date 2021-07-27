import React, {useState , useEffect}from 'react';
import ItemDetail from './ItemDetail.js'
import {useParams} from 'react-router-dom'
// firebase
import {getFirestore} from '../firebase'



function ItemDetailContainer () {
  const [product, setProduct] = useState([])
  const productId = useParams();

console.log(productId.itemid)
  const getItem = () => {
        const db = getFirestore();
        const productsCollection = db.collection('productos');
        productsCollection.where('id','==', productId.itemid).get().then((querySnapshot) => {
          if(querySnapshot.size === 0){
            console.log('no results')
          } else{
            setProduct(querySnapshot.docs.map(doc=>doc.data())[0])
          }
        }).catch(error=>{
          console.log('error',error)
        })
    }
  // const getItem = () => {
  //
  //   getItems.then(res => res.clone().json()).then((data) => setProduct(data.find(element => element.id === productId.itemid)))
  // }


    useEffect(()=>{
      getItem();
        },[])

  console.log('producto', product)

 return (
   <ItemDetail item = {product}/>

 )
}

export default ItemDetailContainer
