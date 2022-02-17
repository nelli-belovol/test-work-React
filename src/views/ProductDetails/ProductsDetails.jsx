import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoBag } from 'react-icons/io5';
import { productsSelectors, productsActions } from 'redux/products';
import ProductInfo from '../../Components/ProductInfo/ProductInfo';
import { Container } from '../Container.styled';
import {
  ProductsDetailsEl,
  Button,
  AddButton,
  HeaderEl,
} from './ProductsDetails.styled';

export default function ProductsDetails() {
  const dispatch = useDispatch();

  const product = useSelector(productsSelectors.getProductDetails);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleClick = () => {
    dispatch(productsActions.addProduct(product));
  };

  return (
    <Container>
      <ProductsDetailsEl>
        <HeaderEl>
          <Button onClick={goBack} type="button">
            Go back
          </Button>
          <NavLink to="/cart">
            <IoBag
              size="24px"
              fill="var(--price-color)"
              stroke="var(--first-accentcolor)"
              strokeWidth="6"
            ></IoBag>
          </NavLink>
        </HeaderEl>
        <ProductInfo />
        <AddButton onClick={handleClick} type="button">
          Add to Cart
        </AddButton>
      </ProductsDetailsEl>
    </Container>
  );
}
