//src/App.tsx

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Outlet } from 'react-router-dom'
import { CartModal } from './components/CartModal'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* NÃO inclua Header genérico aqui */}
      <Outlet />
      <CartModal />
    </ThemeProvider>
  )
}

export default App
