import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import ContactButton from '../ui/contact-button'

export default function Navbar() {
  return (
    <nav className="sticky top-10 z-50 border bg-gray-100/50 rounded-sm p-3 backdrop-blur-sm">
      <div className="flex justify-between items-center text-[14px]">
        <div className="flex-col gap-1 text-center">
          <Link href="/">
            <Image
              className="opacity-90"
              src={'/wawb.svg'}
              alt="logo"
              width={60}
              height={50}
            />
          </Link>
        </div>
        <div className="w-60">
          <ul className="flex justify-between items-center">
            <li>
              <Button variant="link" size="sm" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size="sm" asChild>
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li>
              <ContactButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
