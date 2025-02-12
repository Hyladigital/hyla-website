"use client"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export function ContactForm() {
  const interests = ["Motion Video", "UX/UI Design", "Branding", "Marketing"]

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Contact</SectionHeading>

        <div className="max-w-2xl mx-auto p-8 rounded-lg border-[3px] border-[#0055ff]/20 bg-black">
          <div className="mb-6">
            <p className="mb-4">I'm interested in</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full border border-[#0055ff] text-sm hover:bg-[#0055ff]/10"
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-[#0055ff]/20"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-black border border-[#0055ff]/20"
            />
            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full p-3 rounded-lg bg-black border border-[#0055ff]/20"
            />
            <Button className="w-full bg-[#0055ff] text-white hover:bg-[#0055ff]/90">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

