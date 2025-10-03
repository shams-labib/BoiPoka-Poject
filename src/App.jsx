
import { Outlet, useLocation } from 'react-router'
import './App.css'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import Navber from './Pages/Navber'
import ShowCard from './Pages/ShowCard'

function App() {

  const location = useLocation();

  const HideHero = ["/home", '/listedBooks', '/pages', '/card/:bookId'];

  const showHero = !(HideHero.includes(location.pathname) || location.pathname.startsWith("/card/"))
 

  return (
    <>
    <Navber></Navber>
    {showHero && <Hero></Hero>}
     <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}


export default App
