import * as S from './styles'
import { MenuItem as MenuItemType } from '../../types'
import close from '../../assets/images/close.png'

type Props = {
  dish: MenuItemType
  onClose: () => void
  onAddToCart: () => void
}

export const DishModal = ({ dish, onClose, onAddToCart }: Props) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <img src={close} alt='Close' />
        </S.CloseButton>

        <S.ModalBody>
          <S.DishImage src={dish.photo} alt={dish.name} />

          <S.DishInfo>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <S.DetailRow>
              <span>Serve: {dish.servingSize}</span>
            </S.DetailRow>

            <S.AddButton onClick={onAddToCart}>
              Adicionar ao carrinho
              <S.Price> - R$ {dish.price.toFixed(2)}</S.Price>
            </S.AddButton>
          </S.DishInfo>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}
