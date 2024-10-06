import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Products, ItemDetails, Categories, Cart } from '../pages';
import { MainLayout } from '../layout';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/category/:cat' element={<Categories />} />
          <Route path='/products/:id' element={<ItemDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
