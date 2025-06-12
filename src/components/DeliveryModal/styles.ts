// src/components/DeliveryModal/styles.ts
import styled from 'styled-components'

export const DeliveryModalOverlay = styled.div`
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

export const DeliveryModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
  position: relative;
`

export const DeliveryModalHeader = styled.div`
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const FormGroup = styled.div`
  margin-bottom: 8px;
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: none; //1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 700;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  cursor: pointer;
`

export const ActionButtonsContainer = styled.div`
  display: block;
  gap: 16px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 24px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const BackButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
