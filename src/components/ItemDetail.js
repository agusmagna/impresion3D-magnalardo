// React
import React, {useState, useContext} from 'react'
// Components
import ItemCount from './ItemCount.js'
// Estilo
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Alert,Button } from 'antd';
// React-router-dom
import { Link } from 'react-router-dom';
// Context
import {CartContext} from './CartContext.js'


function ItemDetail({item}){
  const [isHidden, setIsHidden] = useState(false)
  const [error, setError] = useState(true)
  const cartContext = useContext(CartContext)


  const isInCart = cartContext.cartComponents.find(element => element.item.id === item.id)


  const onAdd = ({count}) =>{
    const quantityToAdd = count;
    if (!isInCart) {
      if (cartContext.cartComponents.length) {
        cartContext.setCartComponents([...cartContext.cartComponents,{'item':item,'quantity':quantityToAdd}])
        cartContext.setTotalItems(cartContext.totalItems + quantityToAdd)
        cartContext.setTotalPrice(cartContext.totalPrice + (item.price * quantityToAdd))
      }else{
        cartContext.setCartComponents([{'item':item,'quantity':quantityToAdd}])
        cartContext.setTotalItems(cartContext.totalItems + quantityToAdd)
        cartContext.setTotalPrice(cartContext.totalPrice + (item.price * quantityToAdd))
      }
      setIsHidden(true);
    } else (
      setError(false)
    )
  };


  return(
    <div>
      <div style={{ marginLeft:'30px', marginTop:'30px'}}>
        <Link to={`/`}> <p style={{ textAlign:'left', color:'black'}}> Volver </p> </Link>
      </div>
    <Card style={{ width:'70%', margin:'auto'}}>
      <Row>
        <Col span={12}>
          <img src={item.image} alt='foto de producto' style={{ width: 300, margin:'auto'}}/>
        </Col>
        <Col span={12}>
          <h3 style={{textTransform: 'uppercase'}}> {item.name} </h3>
          <p> {item.description} </p>
          <p> $ {item.price} </p>
          <ItemCount isHidden={isHidden} stock={item.stock} initial={1} onAdd = {onAdd}/>
          <div hidden={!isHidden}>
            <Alert message='Tu producto se agreg?? correctamente' type="success"/><br/>
            <Link to={'/cart'}> <Button type='primary'>Terminar mi compra</Button></Link>
          </div>
          <div hidden={error}>
            <Alert message='No puedes agregar el mismo producto dos veces' type="error"/><br/>
          </div>
        </Col>

      </Row>
    </Card>
    </div>
  )

}


 export default ItemDetail
