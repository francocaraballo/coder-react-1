import { PropsWithChildren, Fragment } from "react";
import {
  chakra,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
} from "@chakra-ui/react";
import { ButtonItemComponent } from "../utilities";
import { CartItem } from "./CartItem";


export const CartListContainer = ({ productsList }) => {

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>
        {productsList.map(( product ) => (
          <CartItem {...product} />
        ))}
      </VStack>
    </Container>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};
