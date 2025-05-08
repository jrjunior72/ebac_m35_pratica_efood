import { createContext, useContext, ReactNode } from 'react'
import { useCart } from '../hooks/useCart'
//import { MenuItem } from '../types'

type CartContextType = ReturnType<typeof useCart>

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCart()

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}
