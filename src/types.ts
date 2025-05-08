export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
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
