import { Button } from '../Button'
import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'

export function Cart() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCartContext()

  const handleCheckout = () => {
    // Lógica para finalizar pedido
    console.log('Finalizando pedido...')
    clearCart()
  }

  return (
    <S.CartContainer>
      <S.CartTitle>Carrinho</S.CartTitle>

      {cartItems.length === 0 ? (
        <S.EmptyCart>
          <p>Seu carrinho está vazio</p>
          <p>Adicione itens para continuar</p>
        </S.EmptyCart>
      ) : (
        <>
          <S.CartItems>
            {cartItems.map((item) => (
              <S.CartItem key={item.id}>
                <S.ItemImage src={item.image} alt={item.name} />
                <S.ItemDetails>
                  <S.ItemName>{item.name}</S.ItemName>
                  <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>
                </S.ItemDetails>
                <S.RemoveButton
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remover item"
                >
                  ×
                </S.RemoveButton>
              </S.CartItem>
            ))}
          </S.CartItems>

          <S.CartSummary>
            <S.SummaryRow>
              <span>Valor total</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </S.SummaryRow>
          </S.CartSummary>

          <Button fullWidth onClick={handleCheckout} type="button">
            Continuar com a entrega
          </Button>
        </>
      )}
    </S.CartContainer>
  )
}
