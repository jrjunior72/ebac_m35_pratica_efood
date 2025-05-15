// // src/pages/Restaurant/styles.ts
// import styled from 'styled-components'
// import { theme } from '../../styles/theme'

// export const Container = styled.div`
//   padding-bottom: 40px;
// `

// export const Banner = styled.div`
//   height: 280px;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     // background-color: rgba(0, 0, 0, 0.5);
//   }
// `

// export const RestaurantHeader = styled.header`
//   padding: 40px 0;
// `

// export const RestaurantInfo = styled.div`
//   h2 {
//     font-size: 32px;
//     color: ${theme.colors.primary};
//     margin-bottom: 16px;
//   }

//   p {
//     line-height: 1.5;
//   }
// `

// export const Rating = styled.span`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 16px;
//   color: ${theme.colors.secondary};
// `

// pages/Restaurant/styles.ts
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  padding-bottom: 40px;
`

export const RestaurantHeader = styled.header`
  padding: 40px 0;
`

export const RestaurantInfo = styled.div`
  p {
    font-size: 14px;
    line-height: 1.5;
    color: ${theme.colors.text};
    margin-top: 16px;
  }
`

export const Rating = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.primary};
  display: block;
`
