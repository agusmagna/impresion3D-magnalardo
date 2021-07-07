// React
import React from 'react'
// Components
import ItemCount from './ItemCount.js'
// Estilo
import { Row, Col } from 'antd';
import { Card } from 'antd';
// React-router-dom
import { Link } from 'react-router-dom';


function ItemDetail({item}){

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
          <ItemCount stock={item.stock} initial={1}/>
        </Col>

      </Row>
    </Card>
    </div>
  )

}


 export default ItemDetail
