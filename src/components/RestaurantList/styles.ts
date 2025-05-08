import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  padding: 80px 171px 120px; /* Top Right Bottom Left */

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const ListTitle = styled.h2`
  font-size: 24px;
  color: ${theme.colors.primary};
  font-weight: bold;
`
