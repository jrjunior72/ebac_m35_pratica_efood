import 'styled-components'
import { ThemeType } from './theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {
    // Esta interface agora herda todas as propriedades de ThemeType
    // Não é necessário redeclarar os membros aqui
  }
}
