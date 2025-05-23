//src/components/CartItem/styles.ts Estilos do componente item do carrinho

import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`

export const ItemImage = styled.img`
width: 80px;
height: 80px;
object-fit: cover;
`

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;

`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-left: auto;
  align-self: flex-end;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textLight};
  }

  svg {
    display: block;
  }
`

export const ItemName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 16px;
  margin: 0;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: normal;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`

export const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-size: 14px;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  font-size: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
