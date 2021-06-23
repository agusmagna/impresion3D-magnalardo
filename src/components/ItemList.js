import React, {useState} from 'react';
import Item from './Item.js';


function ItemList ({productos}) {
  return(
    console.log(productos, productos),
    <p> prueba </p>,
    <div>
     {productos.map((product)=> <Item {...product}/>)}
    </div>
  )
}


export default ItemList
