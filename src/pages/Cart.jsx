import { useContext } from 'react';
import { CartListContainer } from '../components';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      <CartListContainer productsList={ cart } />
    </>
  )
}