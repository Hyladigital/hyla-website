import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="64" viewBox="0 0 50 64" fill="none">
<path d="M43.0772 17.6724C40.7428 12.6363 38.1579 8.5871 35.4181 5.6393C32.0628 2.02937 28.5569 0.2 25 0.2C21.4431 0.2 17.9372 2.02937 14.5819 5.6393C11.8421 8.5871 9.26358 12.6427 6.92275 17.6724C2.84593 26.4394 0 37.4093 0 44.3575C0 47.7531 0.687606 50.7539 2.04584 53.2709C3.36994 55.7007 5.31407 57.7363 7.68039 59.1707C11.8315 61.7535 17.6549 63.0629 25 63.0629C32.3451 63.0629 38.1685 61.7535 42.3196 59.1707C44.6859 57.7363 46.6301 55.7007 47.9542 53.2709C49.3124 50.7497 50 47.7531 50 44.3575C50 37.4135 47.1541 26.4394 43.0772 17.6724ZM4.07895 49.1962C3.66367 47.6846 3.46223 46.1223 3.48048 44.5548C3.48048 38.099 6.1736 27.77 10.0297 19.436C12.1647 14.8222 14.4864 11.1465 16.8209 8.56163C18.8179 6.36087 22.2984 2.79126 22.4703 10.7857C22.7695 24.8265 22.5531 31.6304 21.2967 36.745C20.0403 41.8596 9.50764 50.5969 9.50764 50.5969C7.55306 52.0442 4.76231 51.5901 4.07895 49.1962ZM25.0233 59.0625C24.9767 59.0837 12.101 59.0625 12.6273 55.2127C13.1982 51.3524 21.4177 42.734 25.0233 42.734C28.629 42.734 36.8039 51.363 37.3705 55.2127C37.9372 59.0625 25.0233 59.0625 25.0233 59.0625ZM45.9211 49.1962C45.2377 51.5901 42.4469 52.0442 40.4902 50.5969C40.4902 50.5969 29.9554 41.849 28.6991 36.7365C27.4427 31.624 27.2262 24.818 27.5255 10.7772C27.6974 2.78277 31.1778 6.35238 33.1749 8.55314C35.5221 11.138 37.8438 14.8138 39.966 19.4275C43.8264 27.7615 46.5195 38.0905 46.5195 44.5548C46.5378 46.1223 46.3363 47.6846 45.9211 49.1962Z" fill="white"/>
</svg>
            </Link>
            <div className="space-y-1">
              <h3 className="font-bold text-xl">Primal,</h3>
              <h3 className="font-bold text-xl">Essential</h3>
              <p className="text-sm text-gray-400">© 2024 - hyla digital</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <Link href="/" className="block text-sm hover:text-white/80">
                Home
              </Link>
              <Link href="/about" className="block text-sm hover:text-white/80">
                About
              </Link>
              <Link href="/work" className="block text-sm hover:text-white/80">
                Work
              </Link>
              <Link href="/blog" className="block text-sm hover:text-white/80">
                Blog
              </Link>
              <Link href="/privacy" className="block text-sm hover:text-white/80">
                Privacy
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-sm">+905365667974</p>
              <p className="text-sm">hello@hyla.digital</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-white/80">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

