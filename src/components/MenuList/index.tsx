//src/components/MenuList/index.tsx

import { MenuItem } from '../../components/MenuItem'
import { MenuItem as MenuItemType } from '../../types'
import * as S from './styles'

type MenuListProps = {
  items: MenuItemType[]
}

export function MenuList({ items }: MenuListProps) {
  if (items.length === 0) {
    return (
      <S.MenuContainer className="container">
        <S.EmptyMessage>Nenhum item disponível no cardápio</S.EmptyMessage>
      </S.MenuContainer>
    )
  }

  return (
    <S.MenuContainer className="container">
      {/* <S.MenuTitle>Cardápio</S.MenuTitle> */}
      <S.MenuItems>
        {items.map((item: MenuItemType) => (
          <MenuItem key={item.id} dish={item} />
        ))}
      </S.MenuItems>
    </S.MenuContainer>
  )
}
