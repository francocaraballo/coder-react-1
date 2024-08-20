import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import { ChakraProvider, Center } from "@chakra-ui/react";
import ItemListContainer from "./ItemListContainer/ItemListContainer.jsx";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Center>
            <ItemListContainer greeting={'Milo Sport'} />
        </Center>
      </ChakraProvider>
    </>
  );
};

export default App;
