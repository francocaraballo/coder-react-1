import React from "react";
import { CardItem } from "./";
import { Flex } from "@chakra-ui/react";
import { useProducts } from "../../hooks";

export const ItemListContainer = () => {
  const { loading, products } = useProducts();

  return (
    <Flex flexWrap={"wrap"}>
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
