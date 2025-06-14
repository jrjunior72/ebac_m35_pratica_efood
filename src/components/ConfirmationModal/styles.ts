// src/components/ConfirmationModal/styles.ts
import styled from 'styled-components'

export const ConfirmationModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const ConfirmationModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
  position: relative;
`

export const ConfirmationHeader = styled.div`
  margin-bottom: 16px;
  text-align: left;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
export const OrderInfo = styled.div`
  margin-bottom: 24px;
`

export const InfoText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
  text-align: left;
`

export const ActionButtons = styled.div`
  padding: 0;
`

export const HomeButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`
