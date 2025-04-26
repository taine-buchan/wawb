import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './globals.css'
import { ReactNode } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
