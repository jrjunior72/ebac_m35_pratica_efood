import styled from 'styled-components';
import { theme } from '../../styles/theme'; // Importe o tema

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Transparência de 50% */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${theme.colors.primary};
  padding: 24px;
  width: 80%;
  max-width: 800px;
  position: relative;
  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.large}; // sombra do tema
`;

export const ModalBody = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  font-size: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.secondary};
`;

export const DishImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DishInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.secondary};

  h2 {
    font-size: 24px;
    margin: 0;
  }

  p {
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

export const Price = styled.span`
  font-weight: normal;
`

export const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
  }
`
