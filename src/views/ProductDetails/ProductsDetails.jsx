import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoBag } from 'react-icons/io5';
import { productsActions } from 'redux/products';
import ProductInfo from '../../Components/ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';

import FetchProducts from '../../api/products';
import { Container } from '../Container.styled';
import {
  ProductsDetailsEl,
  Button,
  AddButton,
  NavigateEl,
} from './ProductsDetails.styled';
const api = new FetchProducts();

export default function ProductsDetails() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    api.fetchProductsDetails(productId).then(data => {
      if (data.id % 3 === 0) {
        data.sale = true;
      } else {
        data.sale = false;
      }
      setProduct(data);
    });
  }, [productId]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleClick = () => {
    dispatch(productsActions.addProduct(product));
  };

  return (
    <Container>
      <ProductsDetailsEl>
        <NavigateEl>
          <Button onClick={goBack} type="button">
            Go back
          </Button>
          <NavLink to="/cart">
            <IoBag
              display="block"
              size="24px"
              fill="var(--price-color)"
              stroke="var(--first-accentcolor)"
              strokeWidth="6"
            ></IoBag>
          </NavLink>
        </NavigateEl>
        <ProductInfo product={product} />
        <AddButton onClick={handleClick} type="button">
          Add to Cart
        </AddButton>
      </ProductsDetailsEl>
    </Container>
  );
}
