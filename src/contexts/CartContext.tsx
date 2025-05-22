import { createContext, useContext, ReactNode, useState } from 'react'
import { MenuItem } from '../types'

// Tipo para os itens no carrinho (MenuItem + quantidade)
type CartItem = MenuItem & {
  quantity: number
}

// Tipo do contexto
type CartContextType = {
  cartItems: CartItem[]
  cartTotal: number
  cartQuantity: number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

// Provider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Calcula o total monetário do carrinho
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  // Calcula a quantidade total de itens no carrinho
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  // Adiciona item ao carrinho ou incrementa quantidade se já existir
  const addToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevItems.find((i) => i.id === item.id)

      if (existingItem) {
        // Se existir, incrementa a quantidade
        return prevItems.map((i) =>
          i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
        )
      }

      // Se não existir, adiciona o novo item com quantidade 1
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  // Remove item do carrinho
  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  // Atualiza quantidade específica de um item
  // const updateQuantity = (itemId: number, newQuantity: number) => {
  //   if (newQuantity <= 0) {
  //     removeFromCart(itemId)
  //     return
  //   }
// Implementação da função updateQuantity
const updateQuantity = (id: number, quantity: number) => {
  if (quantity < 1) return

  setCartItems(prev =>
    prev.map(item =>
      item.id === id
      ? { ...item, quantity }
      : item
    )
  )
}

// Limpa o carrinho
const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado para usar o contexto
// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}
