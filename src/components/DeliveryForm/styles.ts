import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: 24px;
  border-radius: 8px;
`

export const FormTitle = styled.h3`
  font-size: 18px;
  color: ${theme.colors.primary};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 14px;
    color: ${theme.colors.primary};
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
    font-size: 14px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
