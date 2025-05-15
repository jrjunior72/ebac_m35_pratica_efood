// components/RestaurantHeader/index.tsx
import * as S from './styles'
// import { ChevronLeft } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/vector.svg'

export function RestaurantHeader() {
  // const navigate = useNavigate()

  return (
    <S.HeaderContainer>
      <S.HeaderContent style={{ backgroundImage: `url(${vector})` }}>
        <S.BackButton to="/">
          Restaurantes
        </S.BackButton>
        <S.LogoRestaurant to="/">
          <img src={logo} alt="EFOOD" />
        </S.LogoRestaurant>
        <S.CartButton to="/cart">
          Carrinho (0)
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
