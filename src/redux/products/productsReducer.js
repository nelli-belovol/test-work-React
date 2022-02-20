import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  addProduct,
  delProduct,
  addQuantity,
  delQuantity,
} from './productsActions';

const cartProducts = createReducer([], {
  [addProduct]: (state, { payload }) => [...state, { ...payload, quantity: 1 }],
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

// const isLoading = createReducer(false, {
//   [getProducts.pending]: () => true,
//   [getProducts.fulfilled]: () => false,
//   [getProducts.rejected]: () => false,

//   [getProductById.pending]: () => true,
//   [getProductById.fulfilled]: () => false,
//   [getProductById.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [getProducts.rejected]: (_, action) => action.payload,
//   [getProducts.fulfilled]: () => null,

//   [getProductById.rejected]: (_, action) => action.payload,
//   [getProductById.fulfilled]: () => null,
// });

export default combineReducers({
  cartProducts,

  // isLoading,
  // error,
});
