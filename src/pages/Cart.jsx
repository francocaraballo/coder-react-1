import { useContext } from 'react';
import { CartListContainer } from '../components';
import { CartContext } from '../context/CartContext';

import { Flex, Text } from '@chakra-ui/react'

export const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    
    
    <>
      {
        cart.length === 0 ?
        (
        <Flex justifyContent={"center"} marginTop={"20px"}>
          <Text>El carrito esta vacio</Text>
        </Flex>
        )
        : ( <CartListContainer productsList={ cart } />)
      }
    </>
  )
}