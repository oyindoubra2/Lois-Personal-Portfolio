import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"


function App(){
  return(
    <div className="main">
      <NavBar/> 
      <Hero/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>

  )
}

export default App;
