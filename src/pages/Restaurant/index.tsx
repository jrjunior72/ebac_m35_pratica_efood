// src/pages/Restaurant/index.tsx
import { useParams } from 'react-router-dom'
import { MenuList } from '../../components/MenuList'
import { restaurants } from '../../mocks/restaurant'
import {
  Container,
  Banner,
  RestaurantHeader,
  RestaurantInfo,
  Rating
} from './styles'

export function RestaurantProfile() {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === Number(id))

  // Adicione estes logs para depuração
  console.log('ID da URL:', id)
  console.log('Todos restaurantes:', restaurants)

  // Log adicional
  console.log('Restaurante encontrado:', restaurant)

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <Container>
      {/* Banner com imagem de capa */}
      <Banner style={{ backgroundImage: `url(${restaurant.cover})` }} />

      {/* Informações do restaurante */}
      <RestaurantHeader className="container">
        <RestaurantInfo>
          <h2>{restaurant.name}</h2>
          <Rating>Avaliação: {restaurant.rating}</Rating>
          <p>{restaurant.description}</p>
        </RestaurantInfo>
      </RestaurantHeader>

      {/* Lista de itens do cardápio - REAPROVEITANDO SEU COMPONENTE */}
      <MenuList items={restaurant.dishes} />
    </Container>
  )
}
