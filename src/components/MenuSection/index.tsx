import { MenuItem } from '../MenuItem'
import * as S from './styles'

type MenuSectionProps = {
  section: {
    id: string
    name: string
    items: Array<{
      id: string
      name: string
      description: string
      price: number
      image: string
    }>

  }
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <S.Section>
      <S.SectionTitle>{section.name}</S.SectionTitle>
      <S.ItemsGrid>
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </S.ItemsGrid>
    </S.Section>
  )
}
