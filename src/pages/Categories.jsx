import { useParams } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";

import { CardItem, LoadSpinner } from "../components";

import { Flex, Text, Box } from "@chakra-ui/react";

export function Categories() {
  const { cat } = useParams();
  const { productsByCategory } = useCategories(cat);

  const { products } = productsByCategory;

  return (
    <>
      <Box py='20px'>
        <Text align={"center"} fontSize="3xl">
          {`${cat.slice(0, 1).toUpperCase()}${cat.slice(1)}`}
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center" wrap="wrap" gap="10px">
        {products ? (
          products.map((product) => <CardItem key={ product.id } product={product} />)
        ) : (
          <LoadSpinner />
        )}
      </Flex>
    </>
  );
}
