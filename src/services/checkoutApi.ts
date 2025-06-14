// src/services/checkoutApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface CheckoutRequest {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}


export interface CheckoutResponse {
  orderId: string
}

export const checkoutApi  = createApi({
  reducerPath: 'checkoutApi', // Nome único diferente do restaurantApi
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (orderData) => ({
        url: 'checkout',
        method: 'POST',
        body: orderData,
        headers: {
          // Headers adicionais se necessário
        }
      })
    })
  })
})


export const { useCheckoutMutation } = checkoutApi
