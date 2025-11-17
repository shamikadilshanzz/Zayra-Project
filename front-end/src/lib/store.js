import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import orderReducer from './features/orderSlice';
import { Api } from './api';
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    [Api.reducerPath] : Api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
})

setupListeners(store.dispatch)