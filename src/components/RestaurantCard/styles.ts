import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};

  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: ${theme.colors.primary};
  font-weight: bold;
`;

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  color: ${theme.colors.primary};

  span {
    font-size: 18px;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.primary};
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
`;

export const CardButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  width: 82px;
  height: 24px;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
