import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    contact_name: null,
    shipping: {
      first_name: null,
      last_name: null,
      address: null,
      note: null,
      city: null,
      postal_code: null,
      province: null,
      country: null
    },
    shipping_method: null,
    payment_method: {
      card_number: null,
      cvv: null,
    }
  }
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    changeShipping: (state, action) => {},
    clearShipping: (state) => {},
    changeShippingMethod: (state, action) => {},
    clearShippingMethod: (state) => {},
    changePaymentMethod: (state, action) => {},
    clearPaymentMethod: (state) => {},
  },
})

export const { 
  changeShipping,
  clearShipping,
  changePaymentMethod,
  clearPaymentMethod,
  changeShippingMethod,
  clearShippingMethod
 } = paymentSlice.actions

export default paymentSlice.reducer
