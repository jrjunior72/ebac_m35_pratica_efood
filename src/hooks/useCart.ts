// src/hooks/useCart.ts
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  clearCart
} from '../store/cartSlice'
import { MenuItem } from '../types'

export const useCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  return {
    items: cart.items,
    isOpen: cart.isOpen,
    addItem: (item: MenuItem) => dispatch(addToCart(item)),
    removeItem: (id: number) => dispatch(removeFromCart(id)),
    updateItemQuantity: (id: number, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
    toggleCart: () => dispatch(toggleCart()),
    clearCart: () => dispatch(clearCart()),
    totalItems: cart.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: cart.items.reduce(
      (total, item) => total + (item.price * item.quantity), 0
    )
  }
}
