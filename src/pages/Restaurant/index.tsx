import { useParams } from 'react-router-dom'
import { RestaurantInfo } from '../../components/RestaurantInfo'
import { MenuSection } from '../../components/MenuSection'
import * as S from './styles'
import { restaurants } from '../../mocks/restaurant'
import { MenuItem } from '../../types' // Adicione esta tipagem se ainda não existir

export function RestaurantProfile() {
  const { id } = useParams<{ id: string }>()

  // Encontra o restaurante e já trata o tipo do ID
  const restaurant = restaurants.find((r) => r.id.toString() === id)

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  // Transforma o menu do restaurante no formato esperado pelo MenuSection
  const transformMenuSections = (): MenuItem[] => {
    // Agrupa itens por categoria (ajuste conforme sua estrutura real)
    const categories = [...new Set(restaurant.menu.map((item: { category: unknown }) => item.category))]

    return categories.map(category => ({
      id: category.toLowerCase().replace(/\s+/g, '-'),
      name: category,
      items: restaurant.menu.filter(item => item.category === category)
    }))
  }

  const menuSections = transformMenuSections()

  return (
    <S.RestaurantPage>
      <RestaurantInfo restaurant={restaurant} />

      <S.MenuContainer>
        {menuSections.map((section) => (
          <MenuSection
            key={section.id}
            section={section}
          />
        ))}
      </S.MenuContainer>
    </S.RestaurantPage>
  )
}
