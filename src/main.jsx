import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import ListecBooks from './components/ListecBooks.jsx'
import Pages from './components/Pages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader: async ()=>{
          const res = await fetch('data.json');
          return res.json();
        }
      },
      {
        path:'/listedBooks',
        element:<ListecBooks></ListecBooks>
      },
      {
        path:'/pages',
        element:<Pages></Pages>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
