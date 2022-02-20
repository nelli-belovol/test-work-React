import React, { useEffect, useState } from 'react';

import Header from 'Components/Header/Header';
import ProductsList from 'Components/ProductsList/ProductsList';
import { Container } from '../Container.styled';
import { ProductsEl } from './ProductsPages.styled';

export default function ProductsPage() {
  const [listStyle, setListStyle] = useState(
    localStorage.getItem('listStyle') ?? 'line',
  );

  let changeListStyle = value => {
    setListStyle(value);
    localStorage.setItem('listStyle', value);
  };

  useEffect(() => {
    localStorage.setItem('listStyle', listStyle);
  }, [listStyle]);

  useEffect(() => {
    const list = document.querySelector('ul');
    list.setAttribute('data-listStyle', listStyle);
  }, [listStyle]);

  return (
    <>
      <Container>
        <ProductsEl>
          <Header changeListStyle={changeListStyle} />
          <ProductsList listStyle={listStyle} />
        </ProductsEl>
      </Container>
    </>
  );
}
