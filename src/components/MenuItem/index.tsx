import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { MenuItem as MenuItemType } from '../../types'

type MenuItemProps = {
  dish: MenuItemType // Use o tipo exportado
}

export function MenuItem({ dish }: MenuItemProps) {
  const { addToCart } = useCartContext()

  const handleAddToCart = () => {
    addToCart(dish) // Agora só passa o item básico
  }

  return (
    <S.ItemContainer>
      <S.ItemImage src={dish.photo} alt={dish.name} />

      <S.ItemInfo>
        <S.ItemHeader>
          <S.ItemName>{dish.name}</S.ItemName>
          {dish.servingSize && (
            <S.ItemServing>{dish.servingSize}</S.ItemServing>
          )}
        </S.ItemHeader>

        <S.ItemDescription>{dish.description}</S.ItemDescription>

        <S.ItemFooter>
          <S.ItemPrice>{formatCurrency(dish.price)}</S.ItemPrice>
          {dish.reviews && (
            <S.ItemReviews>
              ★ {dish.rating} ({dish.reviews} avaliações)
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
