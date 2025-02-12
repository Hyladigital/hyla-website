import { GradientButton } from "@/components/GradientButton"

export function ServicesSection() {
  const services = [
    {
      title: "Motion Video Production",
      description: "Stories that inspire action. Videos for campaigns, products, and services.",
    },
    {
      title: "Marketing Strategies",
      description:
        "Campaign planning, audience targeting, and content strategy that connects with people who truly matter.",
    },
    {
      title: "Brand Positioning",
      description:
        "Defining your voice in a crowded space with strategies that help your brand stand out and stay meaningful.",
    },
  ]

  return (
    <section className="py-20 bg-black text-white mb-10">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our services are designed to challenge the status quo and deliver real impact.
            </h2>
          </div>
          <div>
            <p className="text-gray-400">
              hyla is a marketing and creative video agency built for brands that care about more than just profit.
              Inspired by nature's balance, we challenge conventional thinking and uncover stories that matter.
            </p>
            <GradientButton variant="outline" className="mt-4">
              Learn More
            </GradientButton>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#0055ff]" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

