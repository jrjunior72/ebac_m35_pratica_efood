import styled from 'styled-components'
//import { theme } from '../../styles/theme'

// export const BannerContainer = styled.div`
//   height: 280px;
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   background-image: url('https://res.cloudinary.com/demo/image/upload/v1632458257/restaurant-banner.jpg');

//   &::after {
//     position: absolute;
//     background-color: #000;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     content: '';
//     opacity: 0.56;
//   }
// `

// export const BannerText = styled.div`
//   position: relative;
//   color: #fff;
//   z-index: 1;
//   padding-top: 24px;
//   height: 100%;

//   h2 {
//     font-size: 32px;
//     font-weight: 100;
//     margin-bottom: 156px;
//   }

//   h3 {
//     font-size: 32px;
//     font-weight: 900;
//   }
// `

// components/Banner/styles.ts
import { theme } from '../../styles/theme'

export const BannerContainer = styled.div`
  height: 280px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 32px;
  color: ${theme.colors.white};
`

export const RestaurantType = styled.span`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 8px;
`

export const RestaurantTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
