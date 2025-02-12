import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { HowItWorks } from "@/components/how-it-works"
import { BlogSection } from "@/components/blog-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <HowItWorks />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

