import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const DynamicRoute = lazy(() => import('./DynamicRoute.tsx').then(m => ({ default: m.DynamicRoute })))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/aside',
        element: (
          <Suspense fallback="loading route...">
            <DynamicRoute />
          </Suspense>
        ),
        children: [],
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
