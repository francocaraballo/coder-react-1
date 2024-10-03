import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Home, Products, ItemDetails, Categories, Cart } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/category/:cat" element={<Categories />} />
        <Route path="/products/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
