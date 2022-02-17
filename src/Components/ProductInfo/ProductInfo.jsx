import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { productsOperations, productsSelectors } from 'redux/products';

import {
  Title,
  ImageEl,
  Image,
  Price,
  ProductText,
} from './ProductInfo.styled';

export default function ProductInfo() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector(productsSelectors.getProductDetails);

  useEffect(() => {
    dispatch(productsOperations.getProductById(productId));
  }, [dispatch, productId]);

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
