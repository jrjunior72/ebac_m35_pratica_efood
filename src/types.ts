import { ReactNode } from 'react'

export interface MenuItem {
  [x: string]: ReactNode
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity?: number // Adicione esta linha
  servingSize?: string
  reviews?: number
}

export interface Restaurant {
  id: string
  name: string
  rating: number
  description: string
  image: string
  category: string
  deliveryTime: string
}
