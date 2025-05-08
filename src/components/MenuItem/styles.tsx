import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ItemContainer = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
`

export const ItemContent = styled.div`
  padding: ${theme.spacing.medium};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ItemTitle = styled.h3`
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`

export const ItemDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
  flex: 1;
`

export const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
  display: block;
`

export const AddButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  border: none;
  padding: ${theme.spacing.small};
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: auto;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${theme.colors.gray};
    cursor: not-allowed;
  }
`
