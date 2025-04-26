import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center h-32 text-[14px] tracking-widest">
        <Link href="/" className="text-xl font-bold hover:text-blue-600 ">
          WAWB
        </Link>
        <div>
          <ul className="flex gap-16">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
