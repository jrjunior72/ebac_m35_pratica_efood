import * as S from './styles'
import { Restaurant } from '../../types'
import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

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
            <span>{restaurant.rating}</span>
            <img src={star} alt="rating" />
          </S.CardRating>
        </S.CardHeader>
        <S.CardDescription>{restaurant.description}</S.CardDescription>
        <Link to={`/Restaurant/${restaurant.id}`}>
          <S.CardButton>Saiba mais</S.CardButton>
        </Link>
      </S.CardContent>
    </S.CardContainer>
  )
}
