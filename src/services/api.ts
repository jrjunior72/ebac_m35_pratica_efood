// src/services/api.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mapApiRestaurantToLocal } from '../utils/mappers'
import { Restaurant } from '../types'

export interface ApiRestaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
  }

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
      transformResponse: (response: ApiRestaurant[]) =>
        response.map(mapApiRestaurantToLocal)
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: mapApiRestaurantToLocal
    })
  })
})

// Exportando os hooks gerados automaticamente
export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery
} = restaurantApi






// const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/efood'

// export const getRestaurants = async (): Promise<ApiRestaurant[]> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/restaurantes`)

//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`)
//     }

//     return await response.json()
//   } catch (error) {
//     console.error('Falha ao carregar restaurantes:', error)
//     throw error
//   }
// }

// export const getRestaurantById = async (id: string): Promise<ApiRestaurant> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/restaurantes/${id}`)

//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`)
//     }

//     return await response.json()
//   } catch (error) {
//     console.error(`Falha ao carregar restaurante com ID ${id}:`, error)
//     throw error
//   }
// }

// export const getRestaurantDetails = async (id: string): Promise<ApiRestaurant> => {
//   const response = await fetch(`${API_BASE_URL}/restaurantes/${id}`)
//   if (!response.ok) throw new Error('Restaurante não encontrado')
//   return await response.json()
// }
