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

import LogoImg from "../../assets/milo-sport.png";
import CartWidget from "../CartWidget/CartWidget";

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
            src={LogoImg}
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
