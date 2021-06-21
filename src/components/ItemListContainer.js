import React from 'react'
import ItemCount from './ItemCount.js'

function ItemListContainer ({mensaje}){
  return(
    <div>
      <h1> {mensaje} </h1>
      <ItemCount stock={5} initial={1} />
    </div>
  )
}

export default ItemListContainer
