import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const MenuContainer = styled.div`
  && { /* Dobrar a especificidade */
    margin: auto;
    padding-top: 56px;
    padding-bottom: 120px;
  }
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

export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Error = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
`

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
`
