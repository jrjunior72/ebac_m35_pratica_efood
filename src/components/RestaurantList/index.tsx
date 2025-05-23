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
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            highlighted={restaurant.highlighted && index===0} // TRUE apenas para o primeiro card
          />
        ))}
      </S.ListContainer>
    </>
  )
}
