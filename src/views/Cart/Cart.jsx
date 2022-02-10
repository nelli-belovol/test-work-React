import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from 'redux/products';
import FetchProducts from '../../api/products';
const api = new FetchProducts();

export default function Cart() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.getProductsDetails(productId).then(data => setProduct(data));
  }, [productId]);

  const handleDelContact = id => {
    dispatch(productsActions.delProduct(id));
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        width="160px"
        height="160px"
        src={product.image}
        alt={product.description}
      />
      <p>{product.description}</p>
      <span>&#36;{product.price}</span>
      <button type="button">Buy now</button>
    </div>
  );
}

// Экран корзина: список товаров, общая сумма, кнопка оформить заказ (дизайн на свое усмотрение).
// по клику на товар перемещаемся на экран товара.
// в корзине можем удалять товары или изменять их кол-во.
