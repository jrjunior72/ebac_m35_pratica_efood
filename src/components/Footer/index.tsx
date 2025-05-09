import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoContainer>
          <S.Logo to="/">
            <img src={logo} alt="EFOOD" />
          </S.Logo>
        </S.LogoContainer>

        <S.SocialLinks>
          <S.SocialLink href="#" aria-label="Instagram">
            <FaInstagram size={24} />
          </S.SocialLink>
          <S.SocialLink href="#" aria-label="Facebook">
            <FaFacebook size={24} />
          </S.SocialLink>
          <S.SocialLink href="#" aria-label="Twitter">
            <FaTwitter size={24} />
          </S.SocialLink>
        </S.SocialLinks>

        <S.FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.FooterText>
      </S.FooterContent>
    </S.FooterContainer>
  )
}
