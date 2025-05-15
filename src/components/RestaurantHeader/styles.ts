// components/RestaurantHeader/styles.ts
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding: 0;
  display: flex;
  justify-content: center;
  height: 186px;
`

export const HeaderContent = styled.div`
  max-width: 2048px;
  width: 100%;
  margin: -23px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 171px;
`

export const BackButton = styled(Link)`
  background-color: ${theme.colors.secondary};
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
  }
`

export const CartButton = styled(Link)`
  background-color: ${theme.colors.secondary};
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
