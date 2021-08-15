import React from 'react'
// Estilo
import {Card, Row, Col} from 'antd'

export default function ItemsToShop({items,totalPrice}){
  return(
  <Card
    style={{ width: '90%', float: 'left', marginTop:'40px', textAlign:'left'}}
    type="inner"
    title="Detalle de productos">
    <>
    {items.map((component)=>
      <Row>
        <Col style={{ width:'30%'}}>
          <img src={component.item.image} alt='foto de producto'style={{ width:'100%', margin:'auto', display:'block'}}/>
        </Col>
        <Col style={{ padding: '10px', width:'70%'}}>
          <h2>{component.item.name}</h2>
          <p>$ {component.item.price}</p>
          <p>Cantidad: {component.quantity}</p>
        </Col>
      </Row>
    )}
    <div style={{border: '1px solid #000', padding: '10px', margin:'10px'}} >
    <p style={{textAlign:'right', textTransform: 'uppercase', fontSize: '20px',marginRight:'10px', marginBottom:'0'}}>
    total : $ {totalPrice}</p>
    </div>
    </>
  </Card>
)
}
