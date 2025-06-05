// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../types'

interface CartState {
  items: Array<MenuItem & { quantity: number }>
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
