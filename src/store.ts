// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { restaurantApi } from './services/api'
import { checkoutApi } from './services/checkoutApi'      // Novo serviço de checkout
import cartReducer from './store/cartSlice'
import checkoutReducer from './store/checkoutSlice'

export const store = configureStore({
  reducer: {
    [restaurantApi.reducerPath]: restaurantApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer, // Adicionado
    cart: cartReducer,
    checkout: checkoutReducer // Adicionado
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(restaurantApi.middleware)
      .concat(checkoutApi.middleware) // Adicionado
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// // src/store.ts
// import { configureStore } from '@reduxjs/toolkit'
// import { restaurantApi } from './services/api'

// export const store = configureStore({
//   reducer: {
//     [restaurantApi.reducerPath]: restaurantApi.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(restaurantApi.middleware)
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
