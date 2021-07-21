import {createContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
  const [cartComponents, setCartComponents] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const clear = () =>{
    setCartComponents([])
    setTotalItems(0)
    setTotalPrice(0)
  };

  const removeItem = ({component}) => {
    setTotalItems(totalItems - component.quantity)
    setTotalPrice(totalPrice - (component.item.price * component.quantity))
    const newCart = cartComponents.filter(element => element.item.id !== component.item.id)
    setCartComponents(newCart)
  }

  return(
    <CartContext.Provider value={{cartComponents, setCartComponents, totalItems, setTotalItems, clear, removeItem, totalPrice, setTotalPrice}}>
    {children}
    </CartContext.Provider>
  )
}
