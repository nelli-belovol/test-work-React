import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { addProduct, delProduct } from './productsActions';
import { getProducts, getProductById } from './productsOperations';

const entities = createReducer([], {
  [getProducts.fulfilled]: (_, action) => action.payload,
  [getProductById.fulfilled]: (_, action) => action.payload,
});

const cartProducts = createReducer([], {
  [addProduct]: (state, { payload }) => [...state, payload],
  [delProduct]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
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
  cartProducts,
  isLoading,
  error,
});
