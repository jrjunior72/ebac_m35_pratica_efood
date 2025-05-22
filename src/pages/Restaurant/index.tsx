// // src/pages/Restaurant/index.tsx
// import { useParams } from 'react-router-dom'
// import { MenuList } from '../../components/MenuList'
// import { restaurants } from '../../mocks/restaurant'
// import {
//   Container,
//   Banner,
//   RestaurantHeader,
//   RestaurantInfo,
//   Rating
// } from './styles'

// export function RestaurantProfile() {
//   const { id } = useParams()
//   const restaurant = restaurants.find((r) => r.id === Number(id))

//   // Adicione estes logs para depuração
//   console.log('ID da URL:', id)
//   console.log('Todos restaurantes:', restaurants)

//   // Log adicional
//   console.log('Restaurante encontrado:', restaurant)

//   if (!restaurant) {
//     return <div>Restaurante não encontrado</div>
//   }

//   return (
//     <Container>
//       {/* Banner com imagem de capa */}
//       <Banner style={{ backgroundImage: `url(${restaurant.cover})` }} />

//       {/* Informações do restaurante */}
//       <RestaurantHeader className="container">
//         <RestaurantInfo>
//           <h2>{restaurant.name}</h2>
//           <Rating>Avaliação: {restaurant.rating}</Rating>
//           <p>{restaurant.description}</p>
//         </RestaurantInfo>
//       </RestaurantHeader>

//       {/* Lista de itens do cardápio - REAPROVEITANDO SEU COMPONENTE */}
//       <MenuList items={restaurant.dishes} />
//     </Container>
//   )
// }

// pages/Restaurant/index.tsx
import { useParams } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import { MenuList } from '../../components/MenuList'
import { RestaurantHeader } from '../../components/RestaurantHeader'
import { restaurants } from '../../mocks/restaurant'
import {
  Container,
  RestaurantInfo,
  } from './styles'
import { Footer } from '../../components/Footer'
import { CartModal } from '../../components/CartModal'

export function RestaurantProfile() {
  const { id } = useParams()
  const restaurant = restaurants.find(r => r.id === (Number(id)))

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

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
