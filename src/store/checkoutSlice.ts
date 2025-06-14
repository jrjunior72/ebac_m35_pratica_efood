// src/store/deliverySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryData, PaymentMethodType } from '../types'

interface CheckoutState {
  delivery?: DeliveryData
  payment?: PaymentMethodType
  orderId?: string
  estimatedDelivery?: string
}

const initialState: CheckoutState = {}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.delivery = action.payload
    },
    setPaymentData: (state, action: PayloadAction<PaymentMethodType>) => {
      state.payment = action.payload
    },
    completeOrder: (state, action: PayloadAction<{
      orderId: string
      estimatedDelivery: string
    }>) => {
      state.orderId = action.payload.orderId
      state.estimatedDelivery = action.payload.estimatedDelivery
    },
    resetCheckout: () => initialState
  }
})

export const { setDeliveryData, setPaymentData, completeOrder, resetCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
