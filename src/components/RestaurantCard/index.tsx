import * as S from './styles'
import { Restaurant } from '../../types'
import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type RestaurantCardProps = {
  restaurant: Restaurant
  highlighted?: boolean // Controla a visibilidade das etiquetas
}

export const RestaurantCard = ({ restaurant, highlighted = false }: RestaurantCardProps) => {

  return (
    <S.CardContainer>
        {/* Container das etiquetas (só aparece se highlight=true) */}
        {highlighted ? (
          <S.TagsContainer>
            <S.HighlightTag>Destaque da semana</S.HighlightTag>
            <S.CategoryTag>{restaurant.category}</S.CategoryTag>
          </S.TagsContainer>
        ) : null}
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
