"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { GradientButton } from "@/components/GradientButton"
import { SectionHeading } from "@/components/SectionHeading"

export function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const portfolioItems = [
    {
      title: "Example Work 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
    {
      title: "Example Work 2",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
    {
      title: "Example Work 3",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
  ]

  return (
    <section className="py-10 bg-black text-white mb-10">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Portfolio</SectionHeading>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {portfolioItems.map((item, index) => (
              <div key={index} className="min-w-full md:min-w-[calc(33.333%-1rem)] relative">
                <div className="aspect-video rounded-lg border-[3px] border-[#0055ff]/20 bg-[#111] overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-sm text-gray-400">Caption about {item.title}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentSlide(Math.min(portfolioItems.length - 1, currentSlide + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-8">
          <GradientButton variant="outline">More</GradientButton>
        </div>
      </div>
    </section>
  )
}

