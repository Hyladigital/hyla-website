import type React from "react"

interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4">
      {children}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#0055ff]"></span>
    </h2>
  )
}

