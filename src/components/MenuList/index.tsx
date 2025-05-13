import { MenuItem } from '../../components/MenuItem'
import { MenuItem as MenuItemType } from '../../types'
import * as S from './styles'

type MenuListProps = {
  items: MenuItemType[]
}

export function MenuList({ items }: MenuListProps) {
  return (
    <S.MenuContainer>
      <S.MenuTitle>Cardápio</S.MenuTitle>
      <S.MenuItems>
        {items.map((item) => (
          <MenuItem key={item.id} dish={item} />
        ))}
      </S.MenuItems>
    </S.MenuContainer>
  )
}
