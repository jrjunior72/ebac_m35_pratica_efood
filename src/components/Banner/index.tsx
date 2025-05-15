import * as S from './styles'

// export function Banner() {
//   return (
//     <S.BannerContainer>
//       <div className="container">
//         <S.BannerText>
//           <h2>Italiana</h2>
//           <h3>La Dolce Vita Trattoria</h3>
//         </S.BannerText>
//       </div>
//     </S.BannerContainer>
//   )
// }

type BannerProps = {
  image?: string
  title: string
  category?: string
}

export function Banner({ image, title, category }: BannerProps) {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${image})` }}>
      <S.Overlay />
      <S.BannerContent className="container">
        <S.RestaurantType>{category}</S.RestaurantType>
        <S.RestaurantTitle>{title}</S.RestaurantTitle>
      </S.BannerContent>
    </S.BannerContainer>
  )
}
