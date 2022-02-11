import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import products from './products/productsReducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { products },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
