import { createClient } from '../../utils/supabase/server'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export default async function Services() {
  const supabase = await createClient()

  const { data: services, error } = await supabase
    .from('services')
    .select('service_name, description, id, image_url')

  if (error) {
    console.error('Error fetching services:', error)
    return <div>Error loading services</div>
  }

  return (
    <div className="space-y-6 pt-24" id="services">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium text-gray-900 tracking-tight text-center sm:text-left">
        Services
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
        {services?.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full sm:w-[288px] flex flex-col"
          >
            {service.image_url && (
              <Image
                src={service.image_url}
                alt={service.service_name}
                width={800}
                height={450}
                className="w-full h-auto aspect-video rounded-lg object-cover"
                priority={false}
                quality={90}
              />
            )}
            <div className="flex flex-col flex-1 gap-3 pt-3">
              <div className="space-y-2">
                {' '}
                <h3 className="font-bold text-lg">{service.service_name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
              <div className="mt-auto pt-4">
                {' '}
                <Button variant="default" size="sm" asChild>
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
