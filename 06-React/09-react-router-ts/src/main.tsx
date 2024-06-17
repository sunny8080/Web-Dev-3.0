import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router1, router2 } from './route/RouteLayout.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />/ */}
    <RouterProvider router={router1} />
    {/* <RouterProvider router={router2} /> */}
  </React.StrictMode>,
)
