// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { restaurantApi } from './services/api'

export const store = configureStore({
  reducer: {
    [restaurantApi.reducerPath]: restaurantApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
