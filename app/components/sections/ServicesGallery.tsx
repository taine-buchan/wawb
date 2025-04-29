import { createClient } from '../../utils/supabase/server'
import Image from 'next/image'
import { PageLinkButton } from '../ui/contact-button'

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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
        Services
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
        {services?.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-[288px] max-h-[380px] flex flex-col" // Reduced width and height
          >
            {service.image_url && (
              <Image
                src={service.image_url}
                alt={service.service_name}
                width={800}
                height={450}
                className="w-full h-[180px] rounded-lg object-cover" // Fixed height for images
                priority={false}
                quality={90}
              />
            )}
            <div className="flex flex-wrap flex-col flex-1 gap-3 pt-3">
              <div>
                <h3 className="font-bold text-lg">{service.service_name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
              <div className="flex mt-auto">
                {' '}
                <PageLinkButton>Get Quote</PageLinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
