import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <nav className="sticky top-2 bg-gray-50 border rounded-sm p-3 m-auto z-999">
      <div className="flex justify-between items-center text-[14px]">
        <Button variant="outline" asChild>
          <Link href="/">
            <Image
              src="/wawb_logo_v9.svg"
              alt="WAWB Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </Button>

        <ul className="flex items-center gap-2">
          <li>
            <Button variant="outline" asChild>
              <Link href="#services">Services</Link>
            </Button>
          </li>
          <li>
            <Button variant="default" asChild>
              <Link href="#contact">Get Quote</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
