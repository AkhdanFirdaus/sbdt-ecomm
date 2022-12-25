import { configureStore } from '@reduxjs/toolkit'
import { paymentApi } from './services/payment.service'
import { productApi } from './services/products.service'
import cartReducer from './slices/cartSlice'
import paymentReducer from './slices/paymentSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    [productApi.reducerPath]: productApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(paymentApi.middleware)
})
