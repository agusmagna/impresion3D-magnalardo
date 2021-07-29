import React, {useContext, useState, useEffect} from 'react'
// Estilo
import {Card, Row, Col, Button, Form, Input, Checkbox, Alert} from 'antd'
// Contexto
import {CartContext} from './CartContext.js'
// React-router-dom
import { Link } from 'react-router-dom';
// firebase
import {getFirebase, getFirestore} from '../firebase'


export default function Checkout() {
  const cartContext = useContext(CartContext)
  const [error,setError] = useState('')
  const [orderId, setOrderId] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [userInfo, setUserInfo] = useState({
    name:'',
    lastname:'',
    phone: 0 ,
    mail:'',
    verifyMail:'',
  })
  const firebase = getFirebase()
  const inputs = [
    {
      name: 'name',
      label: 'Nombre'
    },
    {
      name: 'lastname',
      label: 'Apellido'
    },
    {
      name: 'phone',
      label: 'Telefono / Celular'
    },
    {
      name: 'mail',
      label: 'Mail'
    },
    {
      name: 'verifyMail',
      label: 'Confirmar tu mail'
    },
  ]

  const onFinish = (values: any) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }
  const onChange = (evt) => {
      setUserInfo({
      ...userInfo,
      [evt.target.name]: evt.target.value
      })
  }

  const db = getFirestore()
  const orders = db.collection('orders')
  const newOrder = {
    buyer: userInfo,
    items: cartContext.cartComponents,
    total: cartContext.totalPrice,
  }

  const onSubmit = (evt) =>{
    if(error===''){
      orders.add(newOrder).then(({id}) => {
        setOrderId(id)
        cartContext.setCartComponents([])
        cartContext.setTotalItems(0)
        cartContext.setTotalPrice(0)
      }).catch(error=>{
        console.log('error',error)
      })
    }
  }

  useEffect(()=>{
    if(userInfo.mail === userInfo.verifyMail){
      setError('')
    } else{
      setError(<Alert style={{ width:'50%', margin: '10px auto'}}  message="Los mails deben coincidir" type="error"/>)
      setDisabled(true)
    };
    if(userInfo.name.length && userInfo.lastname.length && userInfo.phone.length && userInfo.mail.length && userInfo.verifyMail.length) {
      setDisabled(false)
    }
  },[userInfo])

  console.log('error',error)
  return(
      <>
      {cartContext.cartComponents.length ?
        <>
        <Row>
          <Col style={{ width:'60%'}}>
            <Card
              style={{ width: '90%',float: 'right', textAlign:'left', marginTop:'40px'}}
              type="inner"
              title="Finalizar tu compra">
              <Form
               name="basic"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               >
                {inputs.map(({name,label})=>
                  <>
                  <Form.Item
                label={label}
                name={name}
                rules={[{ required: true, message: 'Por favor completar este campo' }]}
                  >
                  <input
                    name={name}
                    onChange={onChange}
                    value={userInfo[name]}/>
                </Form.Item>
                  </>
                )}
                <span>{error}</span>
                <>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              { disabled ?
                <>
                <Button disabled type="primary" htmlType="submit" onClick={onSubmit}>
                  Comprar
                </Button>
                </>
                :
                <>
                <Button  type="primary" htmlType="submit" onClick={onSubmit}>
                  Comprar
                </Button>
                </>
                }
            </Form.Item>
              </>
            </Form>
            </Card>
          </Col>
          <Col style={{ width:'40%'}}>
            <Card
              style={{ width: '90%', float: 'left', marginTop:'40px', textAlign:'left'}}
              type="inner"
              title="Detalle de productos">
              <>
              {cartContext.cartComponents.map((component)=>
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
              total : $ {cartContext.totalPrice}</p>
              </div>
              </>
            </Card>
          </Col>
        </Row>
        </>
        :
        <>
        {orderId.length ?
          <>
        <p style={{ width:'80%', margin: '10px auto'}}> Su orden se genero con éxito. Por favor guarde el número de orden:{orderId}</p>
        </>
        :
        <>Tu carrrito está vacio <br/>
      <Link to={'/'}> Volver a la tienda </Link></>

    }
    </>
  }
  </>



  )
}
