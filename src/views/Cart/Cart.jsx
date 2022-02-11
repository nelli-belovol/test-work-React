import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  productsOperations,
  productsSelectors,
  productsActions,
} from 'redux/products';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(productsSelectors.getCartProducts);

  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [dispatch]);

  const handleDelProduct = id => {
    dispatch(productsActions.delProduct(id));
  };

  const handleClick = product => {
    dispatch(productsActions.delQuantity(product));
  };

  const handleIncrement = product => {
    dispatch(productsActions.addQuantity(product));
  };

  const handleDecrement = product => {
    dispatch(productsActions.delQuantity(product));
  };

  return (
    <ul className="">
      {cartProducts &&
        cartProducts.map(product => {
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
              <Link to={`/products/${product.id}`} element={product.id}>
                More
              </Link>
              <div className="">
                <button onClick={() => handleDecrement(product)} type="button">
                  -
                </button>
                <input type="text" value={product.quantity} readOnly />
                <button onClick={() => handleIncrement(product)} type="button">
                  +
                </button>
              </div>
              <button onClick={handleClick} type="submit">
                Checkout
              </button>
              <button
                onClick={() => handleDelProduct(product.id)}
                type="button"
              >
                Delete from cart
              </button>
            </li>
          );
        })}
    </ul>
  );
}

// Экран корзина: список товаров, общая сумма, кнопка оформить заказ (дизайн на свое усмотрение).
// по клику на товар перемещаемся на экран товара.
// в корзине можем удалять товары или изменять их кол-во.
