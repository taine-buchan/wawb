import { createClient } from '../../utils/supabase/server'
import Image from 'next/image'
import { Button } from '../ui/button'

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
    <div className="space-y-6 py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
        Services
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {services?.map((service) => (
          <div
            key={service.id}
            className="bg-white border-black-400 rounded-2xl p-2 w-[360] max-h-[450px] flex flex-col"
          >
            {service.image_url && (
              <Image
                src={service.image_url}
                alt={service.service_name}
                width={1600}
                height={900}
                className="w-full h-7/12 rounded-xl object-cover"
                priority={false}
                quality={80}
              />
            )}
            <div className="flex flex-col flex-1 gap-6 pt-4">
              <div>
                <h3 className="font-bold">{service.service_name}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>

              <Button variant="default" asChild className="mr-auto">
                <a href="#">Get Quote</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
