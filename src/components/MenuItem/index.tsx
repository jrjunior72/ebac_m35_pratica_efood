import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'
import { MenuItem as MenuItemType } from '../../types'

type MenuItemProps = {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  const { addToCart } = useCartContext()

  return (
    <S.ItemContainer>
      <S.ItemImage src={item.image} alt={item.name} />
      <S.ItemContent>
        <S.ItemTitle>{item.name}</S.ItemTitle>
        <S.ItemDescription>{item.description}</S.ItemDescription>
        <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>
      </S.ItemContent>
      <S.AddButton onClick={() => addToCart(item)}>
        Adicionar ao carrinho
      </S.AddButton>
    </S.ItemContainer>
  )
}
