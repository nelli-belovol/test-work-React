import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoBag } from 'react-icons/io5';
import { productsSelectors, productsActions } from 'redux/products';
import ProductInfo from '../../Components/ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';

import FetchProducts from '../../api/products';
import { Container } from '../Container.styled';
import { ProductsDetailsEl, NavigateEl } from './ProductsDetails.styled';
import { Button, AddButton } from '../../styles/Buttons';
const api = new FetchProducts();

export default function ProductsDetails() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const cartProducts = useSelector(productsSelectors.getCartProducts);

  useEffect(() => {
    api.fetchProductsDetails(productId).then(data => {
      data.price = data.price.toFixed(2);
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

  const handleClick = async product => {
    if (cartProducts.find(cartProduct => cartProduct.id === product.id)) {
      dispatch(productsActions.addQuantity(product));
    } else {
      dispatch(productsActions.addProduct(product));
    }
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
        <AddButton onClick={() => handleClick(product)} type="button">
          Add to Cart
        </AddButton>
      </ProductsDetailsEl>
    </Container>
  );
}
