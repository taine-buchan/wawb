'use client'
import { formSchema } from '@/app/lib/schemas'

import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form'
import { toast } from 'sonner'

import { z } from 'zod'
import { send } from '@/app/lib/email'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    try {
      await send(values)
      toast.success('Form submitted successfully!')
    } catch (error) {
      toast.error('Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contact">
      <div className="flex content-center flex-row-reverse justify-center gap-10 md:flex-wrap sm:flex-wrap flex-wrap">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-gray-900 tracking-tight w-100">
          Flick us an email and{' '}
          <span className="text-blue-500">we’ll be in touch right away.</span>
        </h2>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Need a free quote? Or Want to discuss your property? Drop us a
              message and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your Phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="How can we help?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button className="w-full" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>{' '}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
