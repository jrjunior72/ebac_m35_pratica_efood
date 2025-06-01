//src/components/CartModal/index.tsx

import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem'


export const CartModal = () => {
  const { cartItems, cartTotal, isCartOpen, closeCart } = useCartContext()

  return (
    <S.ModalOverlay $isOpen={isCartOpen} onClick={closeCart}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {/* <S.CloseButton onClick={closeCart}>×</S.CloseButton> */}

        {/* <S.ModalHeader>
          <h2>Carrinho de compras</h2>
        </S.ModalHeader> */}

        <S.CartItemsWrapper>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
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

        {cartItems.length > 0 && (
          <S.CartSummary>
            <S.TotalWrapper>
              <span>Valor total</span>
              <span>{formatCurrency(cartTotal)}</span>
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
