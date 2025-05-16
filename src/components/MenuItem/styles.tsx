import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ItemContainer = styled.div`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  // border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  // padding: 8px;
`

export const ItemInfo = styled.div`
  padding: 8px;
`

export const ItemName = styled.h3`
  font-size: 16px;
  color: ${theme.colors.secondary};
  margin-top: 8px;
`

export const ItemDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${theme.colors.secondary};
  line-height: 1.5;
`

export const ItemPrice = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.secondary};
  margin-bottom: 16px;
`

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const ItemServing = styled.span`
  font-size: 12px;
  color: ${theme.colors.text};
  background: ${theme.colors.lightGray};
  padding: 2px 6px;
  border-radius: 4px;
`

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`

export const ItemReviews = styled.span`
  font-size: 12px;
  color: ${theme.colors.text};
`

export const AddButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  border: none;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.white};
  }
`
