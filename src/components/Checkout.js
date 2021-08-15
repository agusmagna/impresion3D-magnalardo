import React, {useContext, useState, useEffect} from 'react'
// Estilo
import {Card, Row, Col, Button, Form, Alert} from 'antd'
// Contexto
import {CartContext} from './CartContext.js'
// React-router-dom
import { Link } from 'react-router-dom';
// firebase
import {getFirestore} from '../firebase'
// components
import BuySuccessfully from './BuySuccessfully.js'
import ItemsToShop from './ItemsToShop.js'


export default function Checkout() {
  const cartContext = useContext(CartContext)
  const [error,setError] = useState('')
  const [orderId, setOrderId] = useState('')
  const [stockControl, setStockControl] = useState(true)
  const [disabled, setDisabled] = useState(true)
  const [userInfo, setUserInfo] = useState({
    name:'',
    lastname:'',
    phone: 0 ,
    mail:'',
    verifyMail:'',
  })
  const inputs = [
    {
      name: 'name',
      label: 'Nombre',
      type: 'text'
    },
    {
      name: 'lastname',
      label: 'Apellido',
      type: 'text'
    },
    {
      name: 'phone',
      label: 'Telefono / Celular',
      type: 'number'
    },
    {
      name: 'mail',
      label: 'Mail',
      type: 'email'
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
    date: new Date,
  }

  const verifyStock = () => {
    cartContext.cartComponents.map((component)=>
      setStockControl(db.collection('productos').where('id','==', component.item.id) === component.quantity)
    )

  }

  const onSubmit = (evt) =>{
    verifyStock()
    if(error==='' && stockControl){
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
                {inputs.map(({name,label,type})=>
                  <>
                  <Form.Item
                label={label}
                name={name}
                rules={[{ required: true, message: 'Por favor completar este campo' }]}
                  >
                  <input
                    style={{border:'0.5px solid #777'}}
                    name={name}
                    onChange={onChange}
                    value={userInfo[name]}
                    type= {type}/>
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
            <ItemsToShop items={cartContext.cartComponents} totalPrice={cartContext.totalPrice}/>
          </Col>
        </Row>
        </>
        :
        <>
        {orderId.length ?
          <>
        <BuySuccessfully orderId = {orderId}/>
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
