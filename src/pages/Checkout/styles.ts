import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CheckoutContainer = styled.div`
  padding: 40px 0;
`

export const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${theme.colors.primary};
  margin-bottom: 16px;
`
