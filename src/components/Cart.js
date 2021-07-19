import react, {useContext} from 'react'
// Estilo
import {Card, Row, Col, Button} from 'antd'
// Contexto
import {CartContext} from './CartContext.js'
// React-router-dom
import { Link } from 'react-router-dom';


export default function Cart (){
  const cartContext = useContext(CartContext)

  const clear = () =>{
    cartContext.setCartComponents([])
  };
  const removeItem = ({component}) => {
    const newCart = cartContext.cartComponents.filter(element => element.item.id !== component.item.id)
    cartContext.setCartComponents(newCart)
  }
  
  return(
    <Card
      style={{ width: '80%', margin: '40px auto', textAlign:'left'}}
      type="inner"
      title="Tu carrito"
      extra={<Link to={'/cart'} onClick={(event)=> {clear()}}>Eliminar todos los productos</Link>}
    >
      {cartContext.cartComponents.length ?
      cartContext.cartComponents.map((component)=>
        <>
        <Row>
          <Col style={{margin:'auto'}}>
            <img src={component.item.image} alt='foto de producto'style={{ width: 200, margin:'auto', display:'block'}}/>
          </Col>
          <Col style={{margin:'auto'}}>
            <h2>{component.item.name}</h2>
            <p>$ {component.item.price}</p>
            <p>Cantidad: {component.quantity}</p>
          </Col>
          <Col style={{margin:'auto'}}>
            <Button onClick={(event)=> {removeItem({component})}} type='primary' style={{marginTop:'10px'}}> X </Button>
          </Col>
        </Row>
      </>

      )
      :
      'Tu carrrito está vacio'}
    </Card>
  )

}
