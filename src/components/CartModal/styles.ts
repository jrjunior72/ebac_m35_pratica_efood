import styled from 'styled-components'
// import { theme } from '../../styles/theme'

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 16px;
  overflow-y: auto;
  position: relative;
`

export const ModalHeader = styled.div`
  margin-bottom: 32px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  // border-radius: 8px;
`

export const ItemDetails = styled.div`
  flex: 1;
`

export const ItemName = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  span {
    min-width: 20px;
    text-align: center;
  }
`

export const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.textLight};
`

export const EmptyCartMessage = styled.span`
  font-size: 14px;
`

export const CartSummary = styled.div`
  // position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  background: ${({ theme }) => theme.colors.primary};
  // box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CheckoutButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 100%;
  padding: 8px;
  // border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`
