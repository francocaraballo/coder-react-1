import { Flex } from '@chakra-ui/react';
import { CardItem } from './';
import { useProducts } from '../../hooks';
import { LoadSpinner } from '../utilities';

export const ItemListContainer = () => {
  const { loading, products } = useProducts();

  return (
    <Flex
      flexWrap='wrap'
      alignItems='center'
      justifyContent='center'
      padding='30px 15px'
      gap='10px'
    >
      {loading ? (
        <LoadSpinner />
      ) : (
        products.map((product) => {
          return <CardItem product={product} key={product.id} />;
        })
      )}
    </Flex>
  );
};
