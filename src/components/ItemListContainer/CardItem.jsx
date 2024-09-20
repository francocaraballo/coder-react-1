import { useContext } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CardItem = ({ product }) => {

  const { addItem } = useContext(CartContext);

  return (
    <>
      <Card maxW="350px" height="650">
        <CardBody>
          <Image
            src={product.images[0]}
            alt={product.title}
            borderRadius="lg"
            height="300px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text>{product.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={"center"}>
          <ButtonGroup spacing="2">
            <Button colorScheme="blue"
            onClick={ () => addItem(product, 1) }>
              Add to cart
            </Button>
            <Link to={`/products/${product.id}`}>
              <Button variant="outline" colorScheme="blue">
                Details
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
