import About from "../components/About/About"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Services from "../components/Services/Services"


const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>   
    <About></About>
    <Services></Services>
    <Footer></Footer>
    </div>
  )
}

export default Home