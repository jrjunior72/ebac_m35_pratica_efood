import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { MenuItem as MenuItemType } from '../../types'

type MenuItemProps = {
  item: MenuItemType // Use o tipo exportado
}

export function MenuItem({ item }: MenuItemProps) {
  const { addToCart } = useCartContext()

  const handleAddToCart = () => {
    addToCart(item) // Agora só passa o item básico
  }

  return (
    <S.ItemContainer>
      <S.ItemImage src={item.image} alt={item.name} />

      <S.ItemInfo>
        <S.ItemHeader>
          <S.ItemName>{item.name}</S.ItemName>
          {item.servingSize && (
            <S.ItemServing>{item.servingSize}</S.ItemServing>
          )}
        </S.ItemHeader>

        <S.ItemDescription>{item.description}</S.ItemDescription>

        <S.ItemFooter>
          <S.ItemPrice>{formatCurrency(item.price)}</S.ItemPrice>
          {item.reviews && (
            <S.ItemReviews>
              ★ {item.rating} ({item.reviews} avaliações)
            </S.ItemReviews>
          )}
        </S.ItemFooter>

        <S.AddButton onClick={handleAddToCart}>
          Adicionar ao carrinho
        </S.AddButton>
      </S.ItemInfo>
    </S.ItemContainer>
  )
}
