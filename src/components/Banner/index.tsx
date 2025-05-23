import * as S from './styles'

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
