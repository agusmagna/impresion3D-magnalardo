import React, {useState} from 'react';
import { Card } from 'antd';
import { Button } from 'antd';


function ItemCount ({stock, onAdd, initial}) {
   const [count, setCount] = useState(initial)

   const addCount = () => {
      if (stock > 0 && count < stock) {
        setCount(count+1)
      } else {
        alert('No se pueden agregar más productos')
      }
   }
   const subtractCount = () => {
      if (count > 1) {
        setCount(count-1)
      } else{
        alert('La cantidad no puede ser 0')
      }
   }

   return(
     <div>
       <Card title="Producto X" style={{ width: 300, margin:'auto'}}>
         <Button onClick={subtractCount} style={{marginRight:'7px'}}>-</Button>
         {count}
         <Button onClick={addCount} style={{marginLeft:'7px'}}>+</Button><br/>
         <Button type='primary' onClick={onAdd} style={{marginTop:'10px'}}>Agregar al carrito</Button>
       </Card>
     </div>
   )



}




export default ItemCount

//
// import { Card } from 'antd';
//
// ReactDOM.render(
//   <>
//     <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//     <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//   </>,
//   mountNode,
// );
