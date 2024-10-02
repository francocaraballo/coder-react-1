import { useContext } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CardItem = ({ product }) => {
  const { addItem } = useContext(CartContext);

  return (
    <>
      <Card width='320px' height='auto'>
        <CardBody>
          <Image
            src={product.img}
            alt={product.title}
            borderRadius='lg'
            height='300px'
            objectFit={'cover'}
            objectPosition={'center center'}
            marginX={'auto'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>{product.title}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={'center'}>
          <ButtonGroup spacing='2'>
            <Button colorScheme='blue' onClick={() => addItem(product, 1)}>
              Add to cart
            </Button>
            <Link to={`/products/${product.id}`}>
              <Button variant='outline' colorScheme='blue'>
                Details
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
