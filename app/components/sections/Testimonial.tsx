import Image from 'next/image'
import { Card } from '../ui/card'

export default function Testimonial() {
  return (
    <>
      <div className="flex flex-row justify-center gap-8">
        {' '}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-gray-900 tracking-tight w-100">
          Thanks for the feedback Paul!{' '}
        </h2>
        <section className="w-[450px]">
          <Card>
            <div className=" mx-auto text-center p-10">
              <figure>
                <blockquote className="text-lg text-gray-900">
                  <p>
                    “Massive shoutout to Shaun and Jamie for a wicked job on my
                    place. The house looks completely refreshed, like it had
                    years of grime peeled right off. Nailed it fellas, what
                    really stood out was the care they took, no mucking around,
                    just solid, honest work. If you need your place cleaned up
                    right, these are the guys to call, worth every penny.”
                  </p>
                </blockquote>
                <figcaption className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      alt="Paul"
                      width={400}
                      height={600}
                      src="https://rsyycyzcfnqyozywqhlw.supabase.co/storage/v1/object/public/testimonials//418880600_24634312016184770_778127056101751126_n.jpg"
                      className="w-14 h-14 rounded-full object-cover object-[center_top]"
                    />
                    <div className="text-sm">
                      <span className="font-semibold">Paul</span>
                      <span className="text-gray-600">
                        , based in Te Atatu South
                      </span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Card>
        </section>
      </div>
    </>
  )
}
