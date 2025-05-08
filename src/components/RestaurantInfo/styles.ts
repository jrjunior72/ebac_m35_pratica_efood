import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const InfoContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const RestaurantImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    height: 200px;
  }
`

export const InfoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 32px;
  color: ${theme.colors.primary};
  margin-bottom: 8px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

export const Category = styled.span`
  display: inline-block;
  font-size: 16px;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 16px;
  color: ${theme.colors.text};
  line-height: 1.5;
  margin-bottom: 16px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.primary};
  }
`
