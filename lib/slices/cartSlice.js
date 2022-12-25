import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    message: '',
    items: []
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearMessage: (state, action) => {
      state.value.message = ''
    },
    addItem: (state, action) => {
      const {id, price, qty} = action.payload
      const hasCart = state.value.items.find(item => item.id == id)
      if (!hasCart) {
        state.value.items = [
          ...state.value.items,
          {id, price, qty}
        ]
      } else {
        state.value.message = 'Item sudah ada di keranjang'
      }
    },
    removeItem: (state, action) => {
      const {id} = action.payload
      state.value.items = state.value.items.filter(item => item.id != id)
    },
    incrementQty: (state, action) => {
      const {id} = action.payload
      state.value.items = state.value.items.map(item => {
        if (item.id == id) {
          return {
            id: item.id,
            price: item.price,
            qty: item.qty + 1
          }
        }
        return item
      })
    },
    decrementQty: (state, action) => {
      const {id} = action.payload
      state.value.items = state.value.items.map(item => {
        if (item.id == id) {
          return {
            id: item.id,
            price: item.price,
            qty: item.qty - 1
          }
        }
        return item
      })
    }
  },
})

export const {  clearMessage, addItem, removeItem, incrementQty, decrementQty } = cartSlice.actions

export default cartSlice.reducer
