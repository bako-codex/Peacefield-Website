import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Programs from './components/Programs'
import People from './components/People'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useReveal } from './hooks'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <People />
        <Testimonials />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
