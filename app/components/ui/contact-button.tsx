'use client'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

const ContactButton = () => {
  return (
    <Button asChild>
      <Link
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
      >
        Get Quote
      </Link>
    </Button>
  )
}

export default ContactButton
