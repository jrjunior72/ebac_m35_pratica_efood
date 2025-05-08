//import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/vector.svg'

import { HeaderContainer, HeaderContent, HeaderTile, Logo } from './styles'

const Header = () => (
  <HeaderContainer>
    <HeaderContent style={{ backgroundImage: `url(${vector})` }}>
      <Logo to="/">
        <img src={logo} alt="EFOOD" />
      </Logo>
      <HeaderTile>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTile>
      {/* <CartButton to="/checkout">Carrinho (0)</CartButton> */}
    </HeaderContent>
  </HeaderContainer>
)

export default Header
