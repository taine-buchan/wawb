import Testimonial from './components/sections/Testimonial'
import { HeroSection } from './components/sections/HeroSection'
import Services from './components/sections/ServicesGallery'
import ContactForm from './components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Services />
      <Testimonial />
      <ContactForm />
    </main>
  )
}
