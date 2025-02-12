import { GradientButton } from "@/components/GradientButton"

export function HeroSection() {
  return (
    <section className="pt-48 pb-32 bg-black text-white">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative pb-6">
          Stories That Transform,
          <br />
          Strategies That Inspire.
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#0055ff]"></span>
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We create content and strategies that challenge the ordinary, expose the truth, and connect with audiences in
          meaningful ways.
        </p>
        <GradientButton>Discover Now</GradientButton>
      </div>
    </section>
  )
}

