import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  productsOperations,
  productsSelectors,
  productsActions,
} from 'redux/products';

export default function ProductsDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector(productsSelectors.getProductDetails);

  useEffect(() => {
    dispatch(productsOperations.getProductById(productId));
  }, [dispatch, productId]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleClick = () => {
    dispatch(productsActions.addProduct(product));
  };

  return (
    <div>
      <button onClick={goBack} className="" type="button">
        Go back
      </button>
      <h1>{product.title}</h1>
      <img
        width="160px"
        height="160px"
        src={product.image}
        alt={product.description}
      />
      <p>{product.description}</p>
      <span>&#36;{product.price}</span>
      <button onClick={handleClick} type="button">
        Add to Cart
      </button>
    </div>
  );
}
