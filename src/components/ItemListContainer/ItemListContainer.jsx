import React from "react";
import { Flex } from "@chakra-ui/react";
import { CardItem } from "./";
import { useProducts } from "../../hooks";

export const ItemListContainer = () => {
  const { loading, products } = useProducts();

  return (
    <Flex flexWrap="wrap" alignItems='center' justifyContent='center' padding='30px 15px' gap='10px'>
      {loading ? (
        <h1>Cargando ...</h1>
      ) : (
        products.map((product) => {
          return <CardItem product={product} key={product.id} />;
        })
      )}
    </Flex>
  );
};
