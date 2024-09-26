import { useContext } from "react";

import {
  Flex,
  Button,
} from "@chakra-ui/react";
import { ShoppingCartIcon } from "./";
import { CartContext } from "../../context/CartContext";
import { CountItems } from "./";
import { Link } from 'react-router-dom'

export const CartWidget = ({ colorMode }) => {
  const { totalItems } = useContext(CartContext);
  const count = totalItems();

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <CountItems count={count} />
      <Link to={'/cart'}>
        <Button as={Button} rounded={"lg"} cursor={"pointer"} minW={0}>
          <ShoppingCartIcon color={colorMode} />
        </Button>
      </Link>
    </Flex>
  );
};
