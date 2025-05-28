// components/RestaurantHeader/index.tsx
import * as S from './styles'
// import { ChevronLeft } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/vector.svg'
import { useCartContext } from '../../contexts/CartContext'

export function RestaurantHeader() {
  // const navigate = useNavigate()
  const { cartQuantity, openCart } = useCartContext()
  // Calcula o total de itens no carrinho
  // const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

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
        <S.CartButton onClick={openCart}>
          {cartQuantity} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
