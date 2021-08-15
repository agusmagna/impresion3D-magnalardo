import React, {useState, useEffect} from 'react';
// Estilo
import {Card} from 'antd'



export default function BuySuccessfully({orderId}) {

  return(
    <>
    <Card>
    <h1> ¡Gracias por tu compra!</h1>
    <p>El número de orden de tu compra es:{orderId}</p>
    <p>Por favor guardalo para futuras consultas</p>
    </Card>
  </>
  )
}
