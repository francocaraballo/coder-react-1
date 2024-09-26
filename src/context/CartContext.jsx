import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, qty) => {

    const isProductCart = cart.find( item => item.id === product.id);

    if(isProductCart) {
      setCart(
        cart.map(
          item => item.id === product.id
            ? { ...item, qty: item.qty + 1}
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  }

  const removeItem = ( product ) => {
    const isProductCart = cart.find( item => item.id === product.id);

    if(isProductCart.qty === 1) {
      deleteItem( isProductCart.id )
    } else {
      setCart(
        cart.map(
          item => item.id === isProductCart.id
            ? { ...item, qty: item.qty - 1}
            : item
        )
      );
    }
  }

  const deleteItem = ( id ) => {
    setCart(cart.filter( product => product.id != id ))
  }

  const totalItems = () => {
    const count = cart.reduce((acc, val) => acc + val.qty, 0);
    return count;
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalItems, deleteItem }}>
      { children }
    </CartContext.Provider>
  )
}