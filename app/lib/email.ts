'use server'

import { z } from 'zod'
import { formSchema } from './schemas'
import { Resend } from 'resend'
import { EmailTemplate } from '../components/ui/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  await resend.emails.send({
    from: `West Auckland Water Blasting <${process.env.RESEND_FROM_EMAIL}>`,
    to: [emailFormData.email],
    subject: `We've received your message!`,
    react: EmailTemplate({
      firstName: emailFormData.firstName,
      message: emailFormData.message,
    }) as React.ReactNode,
  })

  // Second email to yourself
  await resend.emails.send({
    from: `West Auckland Water Blasting <${process.env.RESEND_FROM_EMAIL}>`,
    to: ['westakwaterblasting@gmail.com'],
    subject: `New form submission from ${emailFormData.firstName}`,
    html: `
      <p><strong>Name:</strong> ${emailFormData.firstName} ${emailFormData.lastName}</p>
      <p><strong>Email:</strong> ${emailFormData.email}</p>
      <p><strong>Message:</strong><br>${emailFormData.message}</p>
    `,
  })
}
