// src/components/RestaurantList/index.tsx

import { Restaurant } from '../../types'
import { RestaurantCard } from '../RestaurantCard'
import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: Props) {

  return (
    <>
      {/* <S.ListTitle>Restaurantes</S.ListTitle> */}
      <S.ListContainer className='container'>
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
