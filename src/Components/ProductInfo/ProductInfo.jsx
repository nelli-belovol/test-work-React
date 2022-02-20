import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Title,
  ImageEl,
  Image,
  Price,
  ProductText,
} from './ProductInfo.styled';

import FetchProducts from '../../api/products';
const api = new FetchProducts();

export default function ProductInfo() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    api.fetchProductsDetails(productId).then(data => setProduct(data));
  }, [productId]);

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
