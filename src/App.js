import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import HomeView from './views/HomeView/HomeView';
// import ProductsPage from './views/ProductsPage/ProductsPage';
// import ProductsDetail from './views/ProductDetails/ProductsDetails';
import { Loading } from './Components/Loading/Loading.jsx';
import Cart from './views/Cart/Cart';

import Global from './styles/global';

const AsyncProductsPage = lazy(() =>
  import('./views/ProductsPage/ProductsPage'),
);

const AsyncProductsDetail = lazy(() =>
  import('./views/ProductDetails/ProductsDetails'),
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Global />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/products" element={<AsyncProductsPage />} />
        <Route path="/products/:productId" element={<AsyncProductsDetail />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Suspense>
  );
}
