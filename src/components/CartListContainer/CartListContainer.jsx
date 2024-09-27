import {
  VStack,
  Container,
  Text
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartListContainer = ({ productsList }) => {
  const { totalPay } = useContext(CartContext);
  const amountToPay = totalPay();

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>
        {productsList.map(( product ) => (
          <CartItem key={ product.id } {...product} />
        ))}
        <Text fontSize={'2xl'}>Total: ${ amountToPay }</Text>
        {
          amountToPay >= 20000 ? 
          <Text>Envio gratis!</Text>
          : <Text>Te faltan ${ 20000 - amountToPay } para tener envio gratis!</Text>
        }
      </VStack>
      
    </Container>
  );
};

