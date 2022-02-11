import { createAction } from '@reduxjs/toolkit';

export const addProduct = createAction('products/addProduct');
export const delProduct = createAction('products/delProduct');
export const addQuantity = createAction('products/addQuantity');
export const delQuantity = createAction('products/delQuantity');
