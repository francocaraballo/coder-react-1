import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, qty) => {
    if (qty == 0) return

    product.qty = qty;
    if(!cart.length) {
      setCart([product])
    } else {
      setCart(items => [...items, product])
    }
    console.log(cart);
    
  }

  const removeItem = () => {

  }

  const totalItems = () => {
    const count = cart.reduce((acc, val) => acc + val.qty, 0);
    return count;
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalItems }}>
      { children }
    </CartContext.Provider>
  )
}