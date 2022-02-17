import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  productsOperations,
  productsSelectors,
  productsActions,
} from 'redux/products';

import {
  ProductInfo,
  Products,
  Title,
  ProductItem,
  Button,
  DarkButton,
  AddInfo,
  ButtonsContainer,
  ImageEl,
  Image,
  Price,
} from './ProductsList.styled';

export default function ProductsList() {
  const dispatch = useDispatch();

  const products = useSelector(productsSelectors.getProducts);

  const cartProducts = useSelector(productsSelectors.getCartProducts);

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [dispatch]);

  const handleClick = async product => {
    if (cartProducts.find(cartProduct => cartProduct.id === product.id)) {
      dispatch(productsActions.addQuantity(product));
    } else {
      dispatch(productsActions.addProduct(product));
    }
  };

  return (
    <Products>
      {products &&
        products.map(product => {
          return (
            <ProductItem key={product.id}>
              <ImageEl>
                <Image src={product.image} alt={product.description} />
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
        })}
    </Products>
  );
}
