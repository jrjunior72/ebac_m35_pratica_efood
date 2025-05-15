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
