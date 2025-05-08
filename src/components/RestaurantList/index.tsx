import { Restaurant } from '../../types'
import { RestaurantCard } from '../RestaurantCard'
import * as S from './styles'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <>
      {/* <S.ListTitle>Restaurantes</S.ListTitle> */}
      <S.ListContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.ListContainer>
    </>
  )
}
