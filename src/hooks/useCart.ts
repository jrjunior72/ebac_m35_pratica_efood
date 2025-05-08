import { useState } from 'react'
import { MenuItem } from '../types'

export function useCart() {
  const [cartItems, setCartItems] = useState<MenuItem[]>([])

  const addToCart = (item: MenuItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0)

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal
  }
}
