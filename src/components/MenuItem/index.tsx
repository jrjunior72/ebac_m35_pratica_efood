// components/MenuItem/index.tsx
import { useState } from 'react'
import * as S from './styles'
import { useCartContext } from '../../contexts/CartContext'
// import { formatCurrency } from '../../utils/formatCurrency'
import { MenuItem as MenuItemType } from '../../types'
import { DishModal } from '../DishModal'

type MenuItemProps = {
  dish: MenuItemType
}

export function MenuItem({ dish }: MenuItemProps) {
  const { addToCart, cartItems } = useCartContext()
  const [isAdding, setIsAdding] = useState(false)
  const [showModal, setShowModal] = useState(false) // Estado para controlar o modal
  const itemInCart = cartItems.find(item => item.id === dish.id)
  const quantity = itemInCart?.quantity || 0

  const handleShowModal = () => {
    setIsAdding(true)
    // addToCart(dish)
    // setTimeout(() => setIsAdding(false), 1000)
    setShowModal(true) // Mostra o modal ao adicionar
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <S.ItemContainer>
        <S.ItemImage src={dish.photo} alt={dish.name} />
        <S.ItemContent>
          <S.ItemHeader>
            <S.ItemName>{dish.name}</S.ItemName>
            {/* {dish.servingSize && (
              <S.ItemServing>{dish.servingSize}</S.ItemServing>
            )} */}
          </S.ItemHeader>

          <S.ItemDescription>{dish.description}</S.ItemDescription>

          <S.ItemFooter>
            {/* <S.ItemPrice>{formatCurrency(dish.price)}</S.ItemPrice>
            {dish.reviews && (
              <S.ItemReviews>
                ★ {dish.rating} ({dish.reviews} avaliações)
              </S.ItemReviews>
            )} */}
            <S.AddButton
              onClick={handleShowModal}
              className={`${quantity > 0 ? 'in-cart' : ''} ${isAdding ? 'adding' : ''}`}
            >
              {quantity > 0 ? `${quantity} no carrinho` : 'Ver detalhes'}
            </S.AddButton>
          </S.ItemFooter>

        </S.ItemContent>
      </S.ItemContainer>
      {/* Modal de detalhes */}
      {showModal && (
        <DishModal
          dish={dish}
          onClose={handleCloseModal}
          onAddToCart={() => {
            addToCart(dish);
            handleCloseModal();
          }}
        />
      )}
    </>



  )
}
