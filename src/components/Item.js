import React from 'react'


function  Item (product) {
  return(
    <div>
      <img src={product.pictureUrl} style={{width:300}}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default Item
