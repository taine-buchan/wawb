import { createClient } from '../../utils/supabase/server'
import Image from 'next/image'

export default async function Services() {
  const supabase = await createClient() // 
  const { data: services, error } = await supabase
    .from("services")
    .select('service_name, description, id, image_url') 

  if (error) {
    console.error('Error fetching services:', error)
    return <div>Error loading services</div>
  }

  return (
    <div className="space-y-4">
      <div className='flex '>
                {services?.map((service) => (
        <div key={service.id} className="p-4 border rounded-lg">
          <h1 className='text-2xl font-bold'>{service.service_name}</h1>
          <p>{service.description}</p>
          {service.image_url && (
            <Image
              src={service.image_url}
              alt={service.service_name}
              width={500}
              height={300}
              className="rounded-lg"
              priority={false}
              quality={80}
            />
          )}
        </div>
      ))}
      </div>
    </div>
  )
}