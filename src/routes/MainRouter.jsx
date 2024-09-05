import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { Home, ItemDetails, Products } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ItemDetails />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
