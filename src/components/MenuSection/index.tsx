import { MenuItem } from '../MenuItem'
import * as S from './styles'

type MenuSectionProps = {
  section: {
    id: number
    name: string
    dishes: Array<{
      id: number
      name: string
      description: string
      price: number
      photo: string
      servingSize?: string
      rating?: number
      reviews?: number
    }>
  }
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <S.Section className="container">
      <S.SectionTitle>{section.name}</S.SectionTitle>
      <S.ItemsGrid>
        {section.dishes.map((dish) => (
          <MenuItem
            key={dish.id}
            dish={{
              ...dish,
              servingSize: dish.servingSize || '',
              rating: dish.rating || 0,
              reviews: dish.reviews || 0
            }}
          />
        ))}
      </S.ItemsGrid>
    </S.Section>
  )
}
