//src/components/CartItem/index.tsx Componente item do carrinho

import * as S from './styles'
import { CartItemType } from '../../types'
import { useCartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import  lixeira from '../../assets/images/lixeira.png'

type CartItemProps = {
  item: CartItemType
}

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, } = useCartContext()

  return (
    <S.CartItemContainer>
      <S.ItemImage src={item.photo} alt={item.name} />

      <S.ItemDetails>
        <S.ItemHeader>
          <S.ItemName>{item.name}</S.ItemName>
          <S.ItemPrice>{formatCurrency(item.price)}</S.ItemPrice>
        </S.ItemHeader>

        {/* <S.QuantityControls>
          <S.QuantityButton
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          >
          -
          </S.QuantityButton>
          <S.QuantityValue>{item.quantity}</S.QuantityValue>
          <S.QuantityButton
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
          +
          </S.QuantityButton>
          </S.QuantityControls> */}
      </S.ItemDetails>
      <S.DeleteButton onClick={() => removeFromCart(item.id)}>
        <img src={lixeira} alt='Remover' />
      </S.DeleteButton>

    </S.CartItemContainer>
  )
}
