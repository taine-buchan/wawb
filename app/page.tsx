import Testimonial from './components/sections/Testimonial'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import Services from './components/sections/ServicesGallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Services />
      <Testimonial />
      <ContactSection />
    </main>
  )
}
