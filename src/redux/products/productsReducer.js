import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  addProduct,
  delProduct,
  addQuantity,
  delQuantity,
} from './productsActions';

const entities = createReducer([], {
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

export default combineReducers({
  entities,
});