import React from 'react';

import {
  Title,
  ImageEl,
  Image,
  Price,
  ProductText,
  Sale,
} from './ProductInfo.styled';

export default function ProductInfo({ product }) {
  return (
    <>
      <Title>{product.title}</Title>
      <ImageEl>
        <Image src={product.image} alt={product.description} />
        {product.sale && <Sale>sale</Sale>}
      </ImageEl>

      <ProductText>{product.description}</ProductText>
      <Price>&#36;{product.price}</Price>
    </>
  );
}
