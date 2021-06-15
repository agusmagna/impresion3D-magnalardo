import React from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
  return(
    <div>
    <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  )
}

export default CartWidget
