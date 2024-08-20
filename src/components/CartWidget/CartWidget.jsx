import React from "react";
import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Button,
  Center
} from '@chakra-ui/react'
import ShoppingCartIcon from "./ShoppingCartIcon";

const CartWidget = ({ colorMode }) => {

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"lg"}
          cursor={"pointer"}
          minW={0}
        >
          <ShoppingCartIcon color={colorMode} />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Text>My cart</Text>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Pay</MenuItem>
          <MenuItem>Clear</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CartWidget;
