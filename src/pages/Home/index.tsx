// pages/Home/index.tsx
// import { Restaurant } from '../../types'
// import { useEffect, useState } from 'react'

import { RestaurantList } from '../../components/RestaurantList'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
// import { getRestaurants } from '../../services/api'
import { useGetRestaurantsQuery } from '../../services/api'
// import { mapApiRestaurantToLocal } from '../../utils/mappers'
import * as S from './styles'

export function Home() {

  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()

  // const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState('')

  // useEffect(() => {
  //   const loadRestaurants = async () => {
  //     try {
  //       setLoading(true)
  //       const apiRestaurants = await getRestaurants()

  //       const mappedRestaurants = apiRestaurants.map(mapApiRestaurantToLocal)
  //     setRestaurants(mappedRestaurants)
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'Erro ao carregar dados')
  //   } finally {
  //     setLoading(false)
  //   }
  //   }

  //   loadRestaurants()
  // }, [])

  // if (loading) return <div>Carregando restaurantes...</div>
  // if (error) return <div>{error}</div>

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar restaurantes</div>

  return (
    <>
      <Header />
      <S.HomeContainer>
        {/* <RestaurantList restaurants={restaurants} /> */}
        <RestaurantList restaurants={restaurants || []} />
      </S.HomeContainer>
      <Footer />
    </>
  )
}
