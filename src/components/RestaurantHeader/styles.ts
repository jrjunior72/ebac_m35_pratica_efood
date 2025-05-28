// components/RestaurantHeader/styles.ts
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

type HeaderContentProps = {
  $background: string
}

export const HeaderContainer = styled.header<HeaderContentProps>`
  padding: 0;
  display: flex;
  justify-content: center;
  height: 186px;
  background-image: url(${props => props.$background});
  // background-repeat: no-repeat;
  background-position: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin-top: -23px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 154px;
`

export const BackButton = styled(Link)`
  // background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`

export const LogoRestaurant = styled(Link)`
  img {
    height: auto;
    width: 125px;
    margin-bottom: auto;
  }
`

export const CartButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.primary};
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`

