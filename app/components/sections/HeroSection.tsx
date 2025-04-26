import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section>
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Cost-effective Water Blasting services to keep your property{' '}
          <span className="text-blue-500">looking its best.</span>
        </h1>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3  font-medium rounded-4xl shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
