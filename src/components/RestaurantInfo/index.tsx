import { Restaurant } from '../../types'
import * as S from './styles'

type RestaurantInfoProps = {
  restaurant: Restaurant
}

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <S.InfoContainer>
      <S.RestaurantImage src={restaurant.image} alt={restaurant.name} />
      <S.InfoContent>
        <S.Title>{restaurant.name}</S.Title>
        <S.Category>{restaurant.category}</S.Category>
        <S.Description>{restaurant.description}</S.Description>
        <S.Rating>
          <span>{restaurant.rating} ★</span>
        </S.Rating>
      </S.InfoContent>
    </S.InfoContainer>
  )
}
