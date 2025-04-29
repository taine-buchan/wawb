import Image from 'next/image'
import { PageLinkButton } from '../ui/contact-button'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-24 flex flex-col gap-8">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 tracking-tight">
            Cost-effective Water Blasting services to keep your property{' '}
            <span className="text-blue-500">looking its best.</span>
          </h1>
          <PageLinkButton>Get in Touch</PageLinkButton>{' '}
        </div>

        <div className="aspect-[16/9] relative w-full max-w-6xl">
          <div className="absolute inset-0 z-19">
            <Image
              src="/HOUSE_BG.svg"
              alt="image of a house"
              width={1200}
              height={400}
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0">
            <Image
              src="/SHAUN_WAWB.svg"
              alt="illustration of Shaun Water Blasting"
              width={400}
              height={600}
              className="z-21 absolute w-[25%] max-w-[300px] left-[10%] bottom-[10%] object-contain"
            />
            <Image
              src="/JAMIE_WAWB.svg"
              alt="illustration of Jamie Water Blasting"
              width={400}
              height={600}
              className="z-20 absolute w-[25%] max-w-[300px] right-[10%] bottom-[10%] object-contain"
            />
            <Image
              src="/Star.svg"
              alt="illustration of Jamie Water Blasting"
              width={100}
              height={100}
              className="z-19 absolute w-[9%] max-w-[300px] left-[28%] bottom-[62%] object-contain animate-spin [animation-duration:50s] linear infinite reverse"
            />
            <Image
              src="/Star_blue.svg"
              alt="illustration of Jamie Water Blasting"
              width={100}
              height={100}
              className=" absolute w-[7%] max-w-[300px] right-[37%] bottom-[69%] object-contain animate-spin [animation-duration:80s] infinite linear reverse"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
