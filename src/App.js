import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsPage from './views/ProductsPage/ProductsPage';
// import { Suspense } from 'react';
import HomeView from './views/HomeView/HomeView';
import ProductsDetail from './views/ProductDetails/ProductsDetails';
// import { Loading } from './Components/Loading';
import Cart from './views/Cart/Cart';

export default function App() {
  return (
    // <Suspense fallback={<Loading />}>
    <Routes>
      <Route index element={<HomeView />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductsDetail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>

    // { </Suspense> }
  );
}
