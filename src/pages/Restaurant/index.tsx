import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList } from '../../components/MenuList'
import { RestaurantInfo } from '../../components/RestaurantInfo'
import * as S from './styles'
import { MenuItem, Restaurant as RestaurantType } from '../../types'

export function Restaurant() {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        setIsLoading(true)

        // Simulação de chamada API - substituir por chamada real
        const mockRestaurant: RestaurantType = {
          id: id || '1',
          name: 'La Dolce Vita',
          rating: 4.5,
          category: 'Italiana',
          description: 'A autêntica cozinha italiana em um ambiente acolhedor.',
          image:
            'https://res.cloudinary.com/demo/image/upload/v1632458257/restaurant-banner.jpg',
          deliveryTime: '30-40 min'
        }

        const mockMenuItems: MenuItem[] = [
          {
            id: '1',
            name: 'Pizza Margherita',
            description: 'Molho de tomate, mussarela, manjericão',
            price: 45.9,
            image:
              'https://res.cloudinary.com/demo/image/upload/v1632458257/pizza.jpg'
          },
          {
            id: '2',
            name: 'Spaghetti Carbonara',
            description:
              'Massa fresca com molho cremoso de ovos, queijo e bacon',
            price: 42.5,
            image:
              'https://res.cloudinary.com/demo/image/upload/v1632458257/pasta.jpg'
          }
        ]

        setRestaurant(mockRestaurant)
        setMenuItems(mockMenuItems)
      } catch (err) {
        setError('Erro ao carregar dados do restaurante')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRestaurantData()
  }, [id])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <S.RestaurantContainer>
      <RestaurantInfo restaurant={restaurant} />
      <MenuList items={menuItems} />
    </S.RestaurantContainer>
  )
}
