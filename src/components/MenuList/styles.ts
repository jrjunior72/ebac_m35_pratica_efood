import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const MenuContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const MenuTitle = styled.h2`
  font-size: 24px;
  color: ${theme.colors.primary};
  margin-bottom: 24px;
  font-weight: bold;
`

export const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
