import {
  chakra,
  Stack,
  Flex,
  Image,
  IconButton
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import { ButtonItemComponent } from "../utilities";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../hooks";

export const CartItem = (product) => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const { increment, decrement } = useCounter();

  const handleClick = () => {

  }

  return (
    <Stack
      key={product.id}
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="gray.400"
      p={2}
      rounded="md"
      w={{ base: "auto", md: "2xl" }}
      overflow="hidden"
      pos="relative"
    >
      <Flex>
        <Image
          rounded="md"
          w={{ base: "100%", md: "18rem" }}
          h="auto"
          objectFit="cover"
          src={ product.thumbnail }
          alt={ product.title }
        />
      </Flex>
      <Flex
        direction="column"
        spacing={2}
        w="100%"
        justifyContent={"space-around"}
        alignItems={"space-between"}
      >
        <Flex justifyContent="space-between">
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            {product.title}
          </chakra.h3>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
            $ {product.price}
          </chakra.h3>
        </Flex>
        <Flex>
          <ButtonItemComponent count={product.qty} firstBtn={decrement} secBtn={increment}/>
          <IconButton onClick={ () => removeItem( product.id )}>
            <MdDeleteOutline />
          </IconButton>
        </Flex>
      </Flex>
    </Stack>
  );
};
