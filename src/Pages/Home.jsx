
import Hero from '../components/Hero.jsx'
import Middle from '../components/Middle.jsx'
import Footer from '../components/Footer.jsx'
import CallToAction from "../components/CallToAction.jsx";
import Navbar from "../components/Navbar.jsx";
import {useUser, SignIn} from '@clerk/clerk-react'





const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Middle/>
       <CallToAction />
      <Footer/>
      
    </div>
  )
}

export default Home
