import * as S from './styles'
import { CartItemType } from '../../types'
import { useCartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'

type CartItemProps = {
  item: CartItemType
}

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCartContext()

  return (
    <S.CartItemContainer>
      <S.ItemImage src={item.photo} alt={item.name} />

      <S.ItemDetails>
        <S.ItemName>{item.name}</S.ItemName>
        <S.ItemPrice>{formatCurrency(item.price)}</S.ItemPrice>
      </S.ItemDetails>

      {/* <S.QuantityControls>
        <S.QuantityButton
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </S.QuantityButton>
        <span>{item.quantity}</span>
        <S.QuantityButton
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </S.QuantityButton>
      </S.QuantityControls> */}

      <S.RemoveButton onClick={() => removeFromCart(item.id)}>
        ×
      </S.RemoveButton>
    </S.CartItemContainer>
  )
}
