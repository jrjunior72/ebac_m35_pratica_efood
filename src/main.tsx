//src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
