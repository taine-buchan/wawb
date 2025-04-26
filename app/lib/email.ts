'use server'

import { z } from 'zod'
import { formSchema } from './shcemas'
import { Resend } from 'resend'
import { EmailTemplate } from '../components/ui/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `West Auckland Water Blasting <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: `We've received your message!`,
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        message: emailFormData.message,
      }) as React.ReactNode,
    })
    if (error) {
      throw error
    }
  } catch (e) {
    throw e
  }
}
