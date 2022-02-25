import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors, productsActions } from 'redux/products';

import {
  ProductInfo,
  Title,
  ProductItem,
  AddInfo,
  ButtonsContainer,
  ImageEl,
  Image,
  Price,
  Sale,
} from './ProductItemGrid.styled';
import { Button, DarkButton } from '../../styles/Buttons';
export default function ProductItemLine(props) {
  const { product } = props;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cartProducts = useSelector(productsSelectors.getCartProducts);

  const handleClick = async product => {
    if (cartProducts.find(cartProduct => cartProduct.id === product.id)) {
      dispatch(productsActions.addQuantity(product));
    } else {
      dispatch(productsActions.addProduct(product));
    }
  };

  return (
    <ProductItem key={product.id}>
      <ImageEl>
        <Image src={product.image} alt={product.description} />
        {product.sale && <Sale>sale</Sale>}
      </ImageEl>
      <ProductInfo>
        <Title> {product.title}</Title>
        <p>ProductID: {product.id}</p>
      </ProductInfo>
      <AddInfo>
        <Price>&#36;{product.price}</Price>
        <ButtonsContainer>
          <DarkButton
            type="button"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            More
          </DarkButton>

          <Button type="button" onClick={() => handleClick(product)}>
            Add to cart
          </Button>
        </ButtonsContainer>
      </AddInfo>
    </ProductItem>
  );
}
