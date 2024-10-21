import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Banner/Banner"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Home from "./Home/Home"

function App() {


  return (
    <div >
      
     <Outlet></Outlet>
    
    </div>
  )
}

export default App
