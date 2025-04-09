
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Location } from "./components/Location"

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
