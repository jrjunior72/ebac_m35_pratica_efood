//src/components/CartModal/index.tsx
import { useState } from 'react'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem'
import { useCart } from '../../hooks/useCart'
import { DeliveryModal } from '../DeliveryModal'
import { PaymentModal } from '../PaymentModal'


export const CartModal = () => {
  const {
    items,
    isOpen,
    toggleCart,
    totalPrice,
    // clearCart
  } = useCart();

  const [showDeliveryModal, setShowDeliveryModal] = useState(false); // Estado para controlar o modal de entrega
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Estado para controlar o modal de pagamento
  const [orderData, setOrderData] = useState<{
    delivery: DeliveryData;
    payment: PaymentMethodType;
  }>();

  if (!isOpen) return null

  const handleCheckout = () => {
    setShowDeliveryModal(true); // Abre o modal de entrega
    // toggleCart(); // Fecha o modal do carrinho (opcional)
  };

  const handleDeliverySubmit = (deliveryData: DeliveryData) => {
    // Salva os dados de entrega (se necessário)
    setShowDeliveryModal(false);
    setShowPaymentModal(true); // Abre o modal de pagamento
  };

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
          onClose={() => setShowDeliveryModal(false)}
          onBackToCart={() => {
            setShowDeliveryModal(false);
            toggleCart(); // Reabre o CartModal
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
          onConfirm={() => {
            // Lógica para finalizar pedido
            setShowPaymentModal(false);
            // Mostrar tela de confirmação
          }}
        />
      )}
    </>
  )
}
