// React
import React from 'react'


function  Item (product) {
  return(
    <div>
        <img src={product.image} alt='foto de producto'style={{ width: 200, margin:'auto', display:'block'}}/>
        <h2>{product.name}</h2>
        <p>$ {product.price}</p>
    </div>
  )
}

export default Item
