import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import StoreProvider from './store/StoreProvider';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/Detail/ProductDetail';

function App() {
  return (
    <div className="container mt-3">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route exact element={<ProductList />} path="/"></Route>
            <Route exact element={<ProductDetail />} path="/product/detail/:id"></Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
