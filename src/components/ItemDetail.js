import React from 'react'

function ItemDetail({item}){

  return(
    <div>
      <h3 style={{textTransform: 'uppercase'}}> {item.name} </h3>
      <img src={item.image} style={{ width: 300, margin:'auto'}}/>
      <p> {item.description} </p>
      <p> $ {item.price} </p>
    </div>
  )

}


 export default ItemDetail
