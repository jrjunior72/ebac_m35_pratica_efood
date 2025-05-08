import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

type ButtonContainerProps = {
  fullWidth: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  border: none;
  padding: ${theme.spacing.medium};
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${theme.colors.gray};
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      display: block;
    `}
`
