import styled from 'styled-components';

export const PaymentModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

export const PaymentModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
  position: relative;
`;

export const PaymentModalHeader = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.secondary};

`;

// export const InputContainer = styled.div`
//   display: flex;
//   gap: 30px;
//   margin-bottom: 24px;
// `;

// Reutilize os outros estilos do DeliveryModal
export {
  FormGroup,
  InputLabel,
  InputField,
  ErrorMessage,
  ActionButtonsContainer,
  SubmitButton,
  BackButton,
  CloseButton
} from '../DeliveryModal/styles';
