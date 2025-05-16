import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Section = styled.section`
  margin-bottom: 120px;
  margin-top: 56px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${theme.colors.primary};
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${theme.colors.primary};
`

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr 1fr);
  gap: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
