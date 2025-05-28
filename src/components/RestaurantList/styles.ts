import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ListContainer = styled.div`
  && { /* Dobrar a especificidade */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  padding-top: 80px; /* Top Right Bottom Left */
  padding-bottom: 120px; /* Top Right Bottom Left */
  align-self: center;
  margin: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
}
`

export const ListTitle = styled.h2`
  font-size: 24px;
  color: ${theme.colors.primary};
  font-weight: bold;
`
