//src/components/CartModal/index.tsx

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem'
import { useCart } from '../../hooks/useCart'


export const CartModal = () => {
    const {
    items,
    isOpen,
    toggleCart,
    totalPrice
  } = useCart()

  if (!isOpen) return null

  return (
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

            <S.CheckoutButton onClick={() => alert('Pedido finalizado!')}>
              Continuar com a entrega
            </S.CheckoutButton>
          </S.CartSummary>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  )
}
