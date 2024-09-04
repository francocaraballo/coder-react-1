import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Navbar, ItemListContainer } from "./components";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
            <ItemListContainer />
      </ChakraProvider>
    </>
  );
};

export default App;
