import React from 'react';

import Header from 'Components/Header/Header';
import ProductsList from 'Components/ProductsList/ProductsList';
import { Container } from '../Container.styled';
import { ProductsEl } from './ProductsPages.styled';

export default function ProductsPage() {
  return (
    <>
      <Container>
        <ProductsEl>
          <Header />
          <ProductsList />
        </ProductsEl>
      </Container>
    </>
  );
}
