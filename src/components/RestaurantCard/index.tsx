import * as S from './styles'
import { Restaurant } from '../../types'

type RestaurantCardProps = {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <S.CardContainer>
      <S.CardImage src={restaurant.image} alt={restaurant.name} />
      <S.CardContent>
        <S.CardHeader>
          <S.CardTitle>{restaurant.name}</S.CardTitle>
          <S.CardRating>
            <span>{restaurant.rating}</span> ★
          </S.CardRating>
        </S.CardHeader>
        <S.CardDescription>{restaurant.description}</S.CardDescription>
        <S.CardButton>Saiba mais</S.CardButton>
      </S.CardContent>
    </S.CardContainer>
  )
}
