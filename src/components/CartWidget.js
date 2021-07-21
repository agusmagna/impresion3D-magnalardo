import React, {useContext, useState, useEffect} from 'react'
// Contexto
import {CartContext} from './CartContext.js'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
  const cartContext = useContext(CartContext)
  const [isWidgetHidden,setIsWidgetHidden] = useState(true)

  const setHidden = () => {
    if(cartContext.cartComponents.length===0){
      setIsWidgetHidden(true)
    } else {
      setIsWidgetHidden(false)
    }
  }
  useEffect(()=>{
    setHidden()
  },[cartContext.cartComponents])

  console.log(isWidgetHidden)
  console.log(cartContext.cartComponents.length )
  return(
    <div hidden={isWidgetHidden}>
    <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'18px'}} />
      <span style={{ margin:'5px', padding:'5px'}}>
        {cartContext.totalItems}
      </span>
    </div>
  )

}

export default CartWidget
