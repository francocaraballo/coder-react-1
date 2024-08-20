import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import CartWidget from "../CartWidget/CartWidget";

import LogoBlack from "../../assets/milo-sport-logo.png";
import LogoWhite from "../../assets/milo-sport-logo-blanco.png"

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} p={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image
            width={"250px"}
            height={"100%"}
            objectFit={"cover"}
            src={colorMode === "light" ? LogoBlack : LogoWhite}
          />
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <CartWidget colorMode={colorMode === "light" ? '#000' : '#fff'} />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
