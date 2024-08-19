import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </>
  );
};

export default App;
