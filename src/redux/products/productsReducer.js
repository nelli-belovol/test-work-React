import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  addProduct,
  delProduct,
  addQuantity,
  delQuantity,
} from './productsActions';
import { getProducts, getProductById } from './productsOperations';

const entities = createReducer([], {
  [getProducts.fulfilled]: (_, { payload }) => {
    payload.forEach(product => (product.quantity = 1));
    return payload;
  },
});

const productDetails = createReducer([], {
  [getProductById.fulfilled]: (_, action) => action.payload,
});

const cartProducts = createReducer([], {
  [addProduct]: (state, { payload }) => [...state, payload],
  [delProduct]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [addQuantity]: (state, { payload }) => {
    const product = state.find(product => payload.id === product.id);
    product.quantity += 1;
  },
  [delQuantity]: (state, { payload }) => {
    const product = state.find(product => payload.id === product.id);
    product.quantity -= 1;
  },
});

const isLoading = createReducer(false, {
  [getProducts.pending]: () => true,
  [getProducts.fulfilled]: () => false,
  [getProducts.rejected]: () => false,

  [getProductById.pending]: () => true,
  [getProductById.fulfilled]: () => false,
  [getProductById.rejected]: () => false,
});

const error = createReducer(null, {
  [getProducts.rejected]: (_, action) => action.payload,
  [getProducts.fulfilled]: () => null,

  [getProductById.rejected]: (_, action) => action.payload,
  [getProductById.fulfilled]: () => null,
});

export default combineReducers({
  entities,
  productDetails,
  cartProducts,

  isLoading,
  error,
});
