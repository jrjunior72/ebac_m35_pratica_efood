// pages/Restaurant/index.tsx
import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'

// import { getRestaurantDetails } from '../../services/api'

import { Banner } from '../../components/Banner'
import { MenuList } from '../../components/MenuList'
import { RestaurantHeader } from '../../components/RestaurantHeader'
import { Footer } from '../../components/Footer'
import { CartModal } from '../../components/CartModal'

// import { mapApiRestaurantToLocal } from '../../utils/mappers'
import { Container, RestaurantInfo } from './styles'
import { useGetRestaurantByIdQuery } from '../../services/api'
// import { Restaurant } from '../../types'

export function RestaurantProfile() {
//   const { id } = useParams()
//   const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

// useEffect(() => {
//   const loadData = async () => {
//     try {
//       if (!id) throw new Error('ID não fornecido')

//       setLoading(true)
//       const apiData = await getRestaurantDetails(id)
//       const restaurantData = mapApiRestaurantToLocal(apiData)
//       setRestaurant(restaurantData)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Erro ao carregar dados')
//     } finally {
//       setLoading(false)
//     }
//   }

//   loadData()
// }, [id])

//   if (loading) return <div>Carregando...</div>
//   if (error) return <div>{error}</div>
//   if (!restaurant) return <div>Restaurante não encontrado</div>

  const { id } = useParams()
  const { data: restaurant, isLoading, error } = useGetRestaurantByIdQuery(id!)

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar restaurante</div>
  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <>
    <RestaurantHeader /> {/* Header específico */}
    <Container>
      {/* Banner reutilizável */}
      <Banner
        image={restaurant.cover}
        title={restaurant.name}
        category={restaurant.category}
      />
      {/* Informações do restaurante */}
      <RestaurantInfo>
        {/* <Rating>★ {restaurant.rating.toFixed(1)}</Rating>
          <p>{restaurant.description}</p> */}
        </RestaurantInfo>
      {/* Lista de itens do menu */}
      <MenuList items={restaurant.dishes} />
    </Container>
    <Footer />
    <CartModal />
    </>
  )
}
