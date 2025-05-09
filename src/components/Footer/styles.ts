import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  padding: 40px 0;
  color: ${theme.colors.white};
`

export const FooterContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const LogoContainer = styled.div`
  svg {
    height: 57px;
    width: auto;
  }
`

export const Logo = styled(Link)`
  img {
    height: auto;
    width: 125px;
    margin-bottom: 32.5px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  column-gap: 8px;
`

export const SocialLink = styled.a`
  color: ${theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.white};
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  line-height: 1.5;
  max-width: 480px;
  margin-top: 80px;
  color: ${theme.colors.primary};
`
