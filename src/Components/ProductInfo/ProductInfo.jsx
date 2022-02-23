import React from 'react';

import {
  Title,
  ImageEl,
  Image,
  Price,
  ProductText,
} from './ProductInfo.styled';

export default function ProductInfo({ product }) {
  return (
    <>
      <Title>{product.title}</Title>
      <ImageEl>
        <Image
          width="160px"
          height="160px"
          src={product.image}
          alt={product.description}
        />
      </ImageEl>

      <ProductText>{product.description}</ProductText>
      <Price>&#36;{product.price}</Price>
    </>
  );
}
