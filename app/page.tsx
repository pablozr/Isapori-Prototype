import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Stats from './components/sections/Stats'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}
