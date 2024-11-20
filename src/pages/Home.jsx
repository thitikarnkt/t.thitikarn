import HeroHemoSec from "../components/HeroHomeSec"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="relative w-full min-h-screen ">
        <HeroHemoSec/>
        <Navbar/>
        <div className="px-20">
            <About/>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}
