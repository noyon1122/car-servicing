import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Register from './components/Login/Register/Register.jsx'
import Home from './Home/Home.jsx'
import Providers from './components/Providers/Providers.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]   
  }

])
createRoot(document.getElementById('root')).render(
 
  
     <StrictMode>
  <Providers> <RouterProvider router={router}></RouterProvider></Providers>
  </StrictMode>,
 

)
