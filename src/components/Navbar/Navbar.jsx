import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Container,
  Text,
  Image,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget, LinksItems } from "./";

import LogoBlack from "../../assets/milo-sport-logo.png";
import LogoWhite from "../../assets/milo-sport-logo-blanco.png";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} p={4}>
      <Container maxW="7xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Image
              width={"200px"}
              height={"100%"}
              objectFit={"cover"}
              src={colorMode === "light" ? LogoBlack : LogoWhite}
            />
          </Link>

          <Stack>
            <LinksItems />
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <CartWidget colorMode={colorMode === "light" ? "#000" : "#fff"} />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
