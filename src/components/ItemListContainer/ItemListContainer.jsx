import { Flex } from '@chakra-ui/react';
import { CardItem } from './';
import { useItemsCollection } from '../../hooks';
import { LoadSpinner } from '../utilities';

export const ItemListContainer = () => {
  const { loading, data } = useItemsCollection('products');

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
        data.map((product) => {
          return <CardItem product={product} key={product.id} />;
        })
      )}
    </Flex>
  );
};
