import {
  VStack,
  Container,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";


export const CartListContainer = ({ productsList }) => {

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>
        {productsList.map(( product ) => (
          <CartItem key={ product.id } {...product} />
        ))}
      </VStack>
    </Container>
  );
};

