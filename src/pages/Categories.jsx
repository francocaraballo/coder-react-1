import { useParams } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";

import { CardItem } from "../components";

import { Flex, Text, Box } from "@chakra-ui/react";

export function Categories() {
  const { cat } = useParams();
  const { productsByCategory } = useCategories(cat);

  const { products } = productsByCategory;

  console.log(products);
  return (
    <>
      <Box py='20px'>
        <Text align={"center"} fontSize="3xl">
          {`${cat.slice(0, 1).toUpperCase()}${cat.slice(1)}`}
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center" wrap="wrap" gap="10px">
        {products ? (
          products.map((product) => <CardItem product={product} />)
        ) : (
          <Text>Cargando...</Text>
        )}
      </Flex>
    </>
  );
}
