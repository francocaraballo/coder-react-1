import {
  chakra,
  Stack,
  Flex,
  Image,
  IconButton,
  HStack,
  Text
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../hooks";

export const CartItem = (product) => {
  const { cart, addItem, removeItem, deleteItem } = useContext(CartContext);

  console.log(cart)

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
          src={product.thumbnail}
          alt={product.title}
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
          {/* <ButtonItemComponent
            count={product.qty}
            firstBtn={decrement}
            secBtn={increment}
          /> */}
          <HStack>
            <HStack>
              <IconButton
                aria-label="Disminuir cantidad"
                icon={<MinusIcon />}
                size="sm"
                onClick={() => removeItem(product)}
                isDisabled={product.qty === 1}
              />
              <Text>{product.qty}</Text>
              <IconButton
                aria-label="Aumentar cantidad"
                icon={<AddIcon />}
                size="sm"
                onClick={() => addItem(product)}
                isDisabled={product.qty >= product.stock}
              />
            </HStack>
            <IconButton onClick={() => deleteItem(product.id)}>
              <MdDeleteOutline />
            </IconButton>
          </HStack>
        </Flex>
      </Flex>
    </Stack>
  );
};
