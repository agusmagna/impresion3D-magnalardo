import React, {useContext} from 'react'
// Estilo
import {Card, Row, Col, Button} from 'antd'
// Contexto
import {CartContext} from './CartContext.js'
// React-router-dom
import { Link } from 'react-router-dom';


export default function Cart (){
  const cartContext = useContext(CartContext)


  return(
    <Card
      style={{ width: '80%', margin: '40px auto', textAlign:'left'}}
      type="inner"
      title="Tu carrito"
      extra={<Link to={'/cart'} onClick={(event)=> {cartContext.clear()}}>Eliminar todos los productos</Link>}
    >
      {cartContext.cartComponents.length ?
        <>
      {cartContext.cartComponents.map((component)=>
        <Row>
          <Col style={{ width:'30%'}}>
            <img src={component.item.image} alt='foto de producto'style={{ width: 200, margin:'auto', display:'block'}}/>
          </Col>
          <Col style={{ padding: '10px', width:'60%'}}>
            <h2>{component.item.name}</h2>
            <p>$ {component.item.price}</p>
            <p>Cantidad: {component.quantity}</p>
          </Col>
          <Col style={{ width:'10%'}}>
            <Button onClick={(event)=> {cartContext.removeItem({component})}} type='primary' style={{marginTop:'10px', backgroundColor:'#BB0000', borderColor:'#BB0000'}}> X </Button>
          </Col>
        </Row>
      )}
      <div style={{backgroundColor:'black', padding: '10px', margin:'10px'}} >
      <p style={{textAlign:'right', textTransform: 'uppercase', fontSize: '20px', color:'white',marginRight:'10px', marginBottom:'0'}}>
      total : $ {cartContext.totalPrice}</p>
      </div>
      </>
      :
      <>Tu carrrito está vacio <br/>
    <Link to={'/'}> Volver a la tienda </Link></>}
    </Card>
  )

}
