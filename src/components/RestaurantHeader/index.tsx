// src/components/RestaurantHeader/index.tsx
import { useCart } from '../../hooks/useCart'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/vector.svg'

export function RestaurantHeader() {
  const { totalItems, toggleCart } = useCart()

  return (
    <S.HeaderContainer $background={vector} >
      <S.HeaderContent className="container">
        <S.BackButton to="/" aria-label="Voltar para restaurantes">
          Restaurantes
        </S.BackButton>
        <S.LogoRestaurant to="/">
          <img src={logo} alt="EFOOD" />
        </S.LogoRestaurant>
        {/* <S.CartButton to="/cart">
          Carrinho ({totalItems})
        </S.CartButton> */}
        <S.CartButton onClick={toggleCart}>
          {totalItems} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
