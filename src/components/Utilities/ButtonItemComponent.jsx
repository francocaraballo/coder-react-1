import { Stack, Button, Flex, useColorModeValue, Box } from "@chakra-ui/react";

export function ButtonItemComponent({ count, firstBtn, secBtn }) {
  return (
    <Flex marginX={'auto'} direction="row" alignItems={"center"} spacing={4}>
      <Button
        colorScheme="black"
        rounded={"none"}
        p={"3"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          boxShadow: "lg",
        }}
        onClick={firstBtn}
      >
        -
      </Button>
      <Box marginX={"14px"}>{ count }</Box>
      <Button
        colorScheme="black"
        rounded={"none"}
        p={"3"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          boxShadow: "lg",
        }}
        onClick={secBtn}
      >
        +
      </Button>
    </Flex>
  );
}
