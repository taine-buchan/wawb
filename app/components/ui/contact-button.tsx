'use client'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from './button'

const PageLinkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button asChild className="group">
      <Link
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
        className="flex items-center gap-2"
      >
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </Button>
  )
}

const ServiceLinkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button asChild className="group">
      <Link
        href="#services"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
        className="flex items-center gap-2"
      >
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </Button>
  )
}
export { PageLinkButton, ServiceLinkButton }
