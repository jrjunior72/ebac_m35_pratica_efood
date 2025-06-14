//src/components/CartModal/index.tsx
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem'
import { useCart } from '../../hooks/useCart'
import { DeliveryModal } from '../DeliveryModal'
import { PaymentModal } from '../PaymentModal'
import { ConfirmationModal } from '../ConfirmationModal'
import { DeliveryData, PaymentMethodType } from '../../types'
import { RootState } from '../../store'
import {
  setDeliveryData,
  setPaymentData,
  completeOrder,
} from '../../store/checkoutSlice'

export const CartModal = () => {
  const dispatch = useDispatch()
  const checkoutData = useSelector((state: RootState) => state.checkout)
  const {
    items,
    isOpen,
    toggleCart,
    totalPrice,
    clearCart
  } = useCart();

  const [showDeliveryModal, setShowDeliveryModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  if (!isOpen) return null

  const handleCheckout = () => {
    setShowDeliveryModal(true); // Abre o modal de entrega
  };

  const handleDeliverySubmit = (deliveryData: DeliveryData) => {
    dispatch(setDeliveryData(deliveryData))
    setShowDeliveryModal(false)
    setShowPaymentModal(true)
  }

  const handlePaymentSubmit = (paymentData: PaymentMethodType) => {
  // Simular chamada à API
  dispatch(setPaymentData(paymentData))
  const orderId = `ORDER-${Math.random().toString(36).substr(2, 8).toUpperCase()}`
  const estimatedDelivery = new Date(Date.now() + 30 * 60 * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  dispatch(completeOrder({
  orderId,
  estimatedDelivery: `${estimatedDelivery}h`

}))

  setShowPaymentModal(false)
  setShowConfirmationModal(true)
  clearCart()
}

const handleBackToHome = () => {
  setShowConfirmationModal(false)
  toggleCart()
}

  return (
    <>
      <S.ModalOverlay onClick={toggleCart}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>

          <S.CartItemsWrapper>
            {items.length > 0 ? (
              items.map(item => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <S.EmptyCart>
                Seu carrinho está vazio
                <S.EmptyCartMessage>
                  Adicione itens para continuar
                </S.EmptyCartMessage>
              </S.EmptyCart>
            )}
          </S.CartItemsWrapper>

          {items.length > 0 && (
            <S.CartSummary>
              <S.TotalWrapper>
                <span>Valor total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </S.TotalWrapper>

              <S.CheckoutButton onClick={handleCheckout}>
                Continuar com a entrega
              </S.CheckoutButton>
            </S.CartSummary>
          )}
        </S.ModalContent>
      </S.ModalOverlay>

      {/* Modal de Entrega */}
      {showDeliveryModal && (
        <DeliveryModal
          onClose={() => {
            setShowDeliveryModal(false);
            toggleCart(); // Fecha todos os modais
          }}
          onBackToCart={() => {
            setShowDeliveryModal(false);
          }}
          onSubmit={handleDeliverySubmit}
        />
      )}
      {showPaymentModal && (
        <PaymentModal
          totalAmount={totalPrice}
          onClose={() => setShowPaymentModal(false)}
          onBack={() => {
            setShowPaymentModal(false);
            setShowDeliveryModal(true);
          }}
          onConfirm={handlePaymentSubmit}
        />
      )}
      {showConfirmationModal && checkoutData && (
        <ConfirmationModal
          orderData={{
            delivery: checkoutData.delivery!,
            payment: checkoutData.payment!,
            orderId: checkoutData.orderId!,
            estimatedDelivery: checkoutData.estimatedDelivery!
          }}
          onClose={() => setShowConfirmationModal(false)}
          onBackToHome={handleBackToHome}
        />
      )}
    </>
  )
}
