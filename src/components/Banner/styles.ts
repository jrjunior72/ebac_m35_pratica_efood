import styled from 'styled-components'
//import { theme } from '../../styles/theme'

export const BannerContainer = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url('https://res.cloudinary.com/demo/image/upload/v1632458257/restaurant-banner.jpg');

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
`

export const BannerText = styled.div`
  position: relative;
  color: #fff;
  z-index: 1;
  padding-top: 24px;
  height: 100%;

  h2 {
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 156px;
  }

  h3 {
    font-size: 32px;
    font-weight: 900;
  }
`
