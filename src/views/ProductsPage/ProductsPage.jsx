import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsOperations, productsSelectors } from 'redux/products';

export default function ProductsPage() {
  const dispatch = useDispatch();

  const products = useSelector(productsSelectors.getProducts);
  console.log(products);

  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [dispatch]);

  return (
    <>
      <ul className="">
        {products &&
          products.map(product => {
            return (
              <li className="" key={product.id}>
                <img
                  width="66px"
                  height="66px"
                  src={product.image}
                  alt={product.description}
                />
                <h2> {product.title}</h2>
                <p>ProductID:{product.id}</p>
                <span>&#36;{product.price}</span>
                <Link to={`/${product.id}`} element={product.id}>
                  More
                </Link>
                <Link to={`/cart`}>Add to cart</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
