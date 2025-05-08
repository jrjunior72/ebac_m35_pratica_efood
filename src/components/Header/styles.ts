import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'

export const HeaderContainer = styled.header`
  padding: 0;
  display: flex;
  justify-content: center;
`

export const HeaderContent = styled.div`
  max-width: 2048px;
  height: 348px;
  width: 100%;
  margin: -24px auto;
  display: flex;
  align-items: center;
  padding: 0;
  flex-direction: column;
`

export const Logo = styled(Link)`
  img {
    height: auto;
    width: 125px;
    margin-top: 64px;
  }
`

export const HeaderTile = styled.div`
  color: ${theme.colors.primary};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  flex: 1;
  margin: 100px 0 ${theme.spacing.extra};
  width: 539px;
  height: 84px;
`

export const CartButton = styled(Link)`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`
