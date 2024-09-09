import React from "react";
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

export const CardItem = ({ product }) => {
  return (
    <>
      <Card maxW="350px">
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
              {product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
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
