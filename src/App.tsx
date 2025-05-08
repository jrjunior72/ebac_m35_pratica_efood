import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Outlet />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
