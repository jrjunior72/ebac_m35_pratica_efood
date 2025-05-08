import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CartContainer = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 16px;
  border-radius: 8px;
  position: sticky;
  top: 16px;
`

export const CartTitle = styled.h3`
  font-size: 18px;
  color: ${theme.colors.primary};
  margin-bottom: 16px;
`

export const CartItems = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`

export const ItemDetails = styled.div`
  flex: 1;
`

export const ItemName = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.primary};
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 24px 0;

  p {
    color: ${theme.colors.primary};
    margin-bottom: 8px;
  }
`

export const CartSummary = styled.div`
  margin: 16px 0;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${theme.colors.primary};
`
