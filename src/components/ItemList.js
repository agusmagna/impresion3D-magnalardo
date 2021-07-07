//React
import React from 'react';
//Components
import Item from './Item.js';
//React-router-dom
import {Link} from 'react-router-dom';
//Estilo
import { Card } from 'antd';

function ItemList ({productos}) {
  return(
    <div style={{ overflow:'hidden'}}>
     {productos.map((product)=>
        <Card style={{ marginLeft:'2.5%', marginBottom: '2.5%', width: '30%', float:'left'}}>
          <Link to={`/item/${product.id}`}> <Item {...product}/>
          </Link>
        </Card>
      )}
    </div>
  )
}


export default ItemList
