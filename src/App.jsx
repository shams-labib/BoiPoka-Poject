
import { Outlet, useLocation } from 'react-router'
import './App.css'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import Navber from './Pages/Navber'

function App() {

  const location = useLocation();

  const hideHero = location.pathname === '/home';
 

  return (
    <>
    <Navber></Navber>
    {!hideHero && <Hero></Hero>}
     <Outlet></Outlet>
    <Footer></Footer>
    
   
    </>
  )
}


export default App
