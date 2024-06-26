import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/App'
import { AuthLayout } from './pages/_layouts/Auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },

  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
