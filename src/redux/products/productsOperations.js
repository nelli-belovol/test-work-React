import { createAsyncThunk } from '@reduxjs/toolkit';

import FetchProducts from '../../api/products';
const api = new FetchProducts();

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchProducts();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.fetchProductsDetails(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
