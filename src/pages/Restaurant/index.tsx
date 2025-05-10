import { useParams } from 'react-router-dom'
import { RestaurantInfo } from '../../components/RestaurantInfo'
import { MenuSection } from '../../components/MenuSection'
import * as S from './styles'
import { restaurants } from '../../mocks/restaurant'

export function RestaurantProfile() {
  const { id } = useParams<{ id: string }>()
  const restaurant = restaurants.find((r) => r.id === id)

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  const menuSections = [
    {
      id: '1',
      name: 'Entradas',
      items: [
        {
          id: '101',
          name: 'Bruschetta',
          description: 'Pão italiano com tomate fresco e manjericão',
          price: 18.9,
          image: '/assets/images/dishes/bruschetta.jpg'
        }
      ]
    }
    // ... outras seções
  ]

  return (
    <S.RestaurantPage>
      <RestaurantInfo restaurant={restaurant} />

      <S.MenuContainer>
        {menuSections.map((section) => (
          <MenuSection
            key={section.id}
            section={section}
            // restaurantId={section.id}
          />
        ))}
      </S.MenuContainer>
    </S.RestaurantPage>
  )
}
