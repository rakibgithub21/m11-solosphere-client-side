import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
// import Loading from './components/Loading'
// fallbackElement = {< Loading ></Loading >}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}  />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
