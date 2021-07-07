// React
import React, {useState} from 'react';
// Estilo
import { Card } from 'antd';
import { Button } from 'antd';
import { Alert } from 'antd';


function ItemCount ({stock, onAdd, initial}) {
   const [count, setCount] = useState(initial);
   const [error, setError] = useState('');


   const addCount = () => {
      if (stock > 0 && count < stock) {
        setCount(count+1)
        setError('')
      } else {
        setError(<Alert message="No se pueden agregar más productos" type="error"/>)
      }
   }
   console.log('error',error)
   const subtractCount = () => {
      if (count > 1) {
        setCount(count-1)
        setError('')
      } else{
        setError(<Alert message="La cantidad no puede ser 0" type="error"/>)
      }
   }

   return(
     <div>
       <Card style={{ width: 300, margin:'auto'}}>
        <div style={{marginBottom:'5px'}}>
           <Button onClick={subtractCount} style={{marginRight:'7px'}}>-</Button>
           {count}
           <Button onClick={addCount} style={{marginLeft:'7px'}}>+</Button><br/>
        </div>
         <span>{error}</span>
         <Button type='primary' onClick={onAdd} style={{marginTop:'10px'}}> Agregar al carrito</Button>
       </Card>
     </div>
   )



}




export default ItemCount
