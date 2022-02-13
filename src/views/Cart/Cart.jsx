import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  productsOperations,
  productsSelectors,
  productsActions,
} from 'redux/products';

export default function Cart() {
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState(0);
  const cartProducts = useSelector(productsSelectors.getCartProducts);

  useEffect(() => {
    dispatch(productsOperations.getProducts());
    let summ = cartProducts.reduce(
      (total, { quantity, price }) => price * quantity + total,
      0,
    );
    setTotalSum(summ.toFixed(2));
  }, [dispatch, cartProducts]);

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
    if (product.quantity === 1) {
      return;
    }
    dispatch(productsActions.delQuantity(product));
  };

  return (
    <>
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
                  <button
                    onClick={() => handleDecrement(product)}
                    type="button"
                  >
                    -
                  </button>
                  <input type="number" value={product.quantity} readOnly />

                  <button
                    onClick={() => handleIncrement(product)}
                    type="button"
                  >
                    +
                  </button>
                </div>
                <p className="productSum">{product.quantity * product.price}</p>
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
      {cartProducts[0] && <p>Total: {totalSum}</p>}
    </>
  );
}

// Экран корзина: список товаров, общая сумма, кнопка оформить заказ (дизайн на свое усмотрение).
// по клику на товар перемещаемся на экран товара.
// в корзине можем удалять товары или изменять их кол-во.
