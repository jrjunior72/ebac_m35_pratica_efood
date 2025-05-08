import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Restaurant } from '../pages/Restaurant'
import { Checkout } from '../pages/Checkout'
import App from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/restaurant/:id', element: <Restaurant /> },
      { path: '/checkout', element: <Checkout /> }
    ]
  }
])
