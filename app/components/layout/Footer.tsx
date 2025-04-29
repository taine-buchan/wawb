import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'

export const Footer = () => {
  return (
    <footer className="py-6 mt-18 border bg-gray-100/50 rounded-sm backdrop-blur-sm overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-black-300 text-xs flex justify-between">
        <p>
          © {new Date().getFullYear()} West Auckland Water Blasting. All rights
          reserved.
        </p>

        <p>
          Made in West Auckland,{' '}
          <a
            className="text-primary underline-offset-4 underline hover:underline-offset-8 font-semibold transition-all duration-300 ease-in-out "
            href="https://tainebuchanportfolio.vercel.app/"
          >
            by Taine Buchan
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
