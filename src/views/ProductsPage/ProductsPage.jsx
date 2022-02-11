import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  productsOperations,
  productsSelectors,
  productsActions,
} from 'redux/products';

export default function ProductsPage() {
  const dispatch = useDispatch();

  const products = useSelector(productsSelectors.getProducts);

  const cartProducts = useSelector(productsSelectors.getCartProducts);

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
    <>
      <Link to={`/cart`}>Сart</Link>
      <ul className="">
        {products &&
          products.map(product => {
            return (
              <li className="" key={product.id}>
                <h2> {product.title}</h2>
                <img
                  width="66px"
                  height="66px"
                  src={product.image}
                  alt={product.description}
                />

                <p>ProductID:{product.id}</p>
                <span>&#36;{product.price}</span>
                <Link to={`/products/${product.id}`} element={product.id}>
                  More
                </Link>

                <button onClick={() => handleClick(product)} type="button">
                  Add to cart
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
