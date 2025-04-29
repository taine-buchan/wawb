import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { PageLinkButton, ServiceLinkButton } from '../ui/contact-button'

export default function Navbar() {
  return (
    <nav className="sticky top-10 z-50 bg-gray-50 border rounded-sm p-3 m-auto shadow-xl/4">
      <div className="flex justify-between items-center text-[14px]">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="shadow-lg rounded-4xl bg-gray-950 p-1"
              src={'/wawb_logo_v5.svg'}
              alt="logo"
              width={74}
              height={30}
            />
          </Link>
        </div>
        <ul className="flex items-center gap-2">
          <li>
            {/* <Button variant="link" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button> */}
          </li>
          <li>
            <ServiceLinkButton>Services</ServiceLinkButton>
          </li>
          <li>
            <PageLinkButton>Get Quote</PageLinkButton>{' '}
          </li>
        </ul>
      </div>
    </nav>
  )
}
