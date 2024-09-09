import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks";

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const NavLink = ({ name, path, onClose }) => {
  return (
    <Text fontSize='lg'>
      <Link
      to={path}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blue.500", "blue.200"),
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
    </Text>
  );
};

const MenuLink = ({ name, slug, onClose }) => {
  return (
    <Link to={`/category/${slug}`} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "blue.400",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};

export const LinksItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { categoriesList } = useCategories();

  return (
    <>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={6}
            d={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

            <Menu autoSelect={false} isLazy>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton _hover={{ color: "blue.400" }}>
                    <Flex alignItems="center">
                      <Text fontSize='lg'>Categories</Text>
                      <Icon
                        as={BiChevronDown}
                        h={5}
                        w={5}
                        ml={1}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? "rotate(180deg)" : ""}
                      />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    zIndex={5}
                    bg={useColorModeValue(
                      "rgb(255, 255, 255)",
                      "rgb(26, 32, 44)"
                    )}
                    border="none"
                    boxShadow={useColorModeValue(
                      "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
                      "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
                    )}
                  >
                    {categoriesList.map((category, index) => (
                      <MenuLink
                        key={index}
                        name={category.name}
                        slug={category.slug}
                        onClose={onClose}
                      />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>


              {/* Corregir los errores */}
        {/* <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          d={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        /> */}
        
      </Flex>
      {isOpen ? (
        <Box pb={4} d={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Community
            </Text>
            <Stack pl={2} spacing={1} mt={"0 !important"}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
