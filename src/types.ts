//src/types.ts
import { ReactNode } from 'react'

export interface MenuItem {
  [x: string]: ReactNode
  id: number
  name: string
  description: string
  price: number
  photo: string
  quantity?: number
  servingSize?: string
  reviews?: number
}

export interface Restaurant {
  id: number
  name: string
  highlighted?: boolean
  cover?: string
  rating: number
  description: string
  image: string
  category?: string
  deliveryTime?: string
  dishes: MenuItem[]
}

export type CartItemType = {
  id: number
  name: string
  photo: string
  price: number
  quantity: number
}
