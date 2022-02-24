import React, { useEffect, useState } from 'react';

import ProductItemLine from '../ProductItem/ProductItemLine';
import ProductItemGrid from '../ProductItem/ProductItemGrid';

import FetchProducts from '../../api/products';

import { Products } from './ProductsList.styled';
import { v4 as uuidv4 } from 'uuid';
const api = new FetchProducts();

export default function ProductsList({ listStyle }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.fetchProducts().then(data => {
      data.forEach((product, index) => {
        if ((index + 1) % 3 === 0) {
          product.sale = true;
        } else {
          product.sale = false;
        }
        return data;
      });

      setProducts(data);
    });
  }, []);

  return (
    <Products>
      {products &&
        products.map(product => {
          return listStyle === 'line' ? (
            <ProductItemLine key={uuidv4()} product={product} />
          ) : (
            <ProductItemGrid key={uuidv4()} product={product} />
          );
        })}
    </Products>
  );
}
