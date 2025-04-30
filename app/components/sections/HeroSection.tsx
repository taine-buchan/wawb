import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <p className="sr-only">
        Illustrations of Shaun and Jamie from Water Blasting NZ standing in
        front of a house background, with decorative spinning stars.
      </p>
      <div className="max-w-full sm:px-6  pt-16 flex flex-col gap-8">
        <div className="text-center space-y-8 max-w-3xl mx-auto z-100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 tracking-tight">
            Cost-effective Water Blasting services to keep your property{' '}
            <span className="text-blue-500">looking its best.</span>
          </h1>
          <Button>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="aspect-[16/9] relative scale-140 mt-30">
          <div className="absolute inset-0 z-19">
            <Image
              src="/HOUSE_BG.svg"
              alt="image of a house"
              width={1200}
              height={400}
              className="w-[100%]"
              priority
            />
          </div>

          <div className="absolute inset-0">
            <Image
              src="/SHAUN_WAWB.svg"
              alt="illustration of Shaun Water Blasting"
              width={400}
              height={600}
              className="z-21 absolute w-[20%] max-w-[300px] left-[13%] bottom-[25%] object-contain"
            />
            <Image
              src="/JAMIE_WAWB.svg"
              alt="illustration of Jamie Water Blasting"
              width={400}
              height={600}
              className="z-20 absolute w-[10%] max-w-[300px] right-[26%] bottom-[50%] object-contain"
            />
            <Image
              src="/Star.svg"
              alt=""
              role="presentation"
              width={100}
              height={100}
              className="z-19 absolute w-[9%] max-w-[300px] left-[28%] bottom-[62%] object-contain animate-spin [animation-duration:50s] linear infinite reverse"
            />
            <Image
              src="/Star_blue.svg"
              alt=""
              role="presentation"
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
