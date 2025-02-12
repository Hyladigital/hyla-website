import { Onest } from "next/font/google"

export const onest = Onest({
  subsets: ["latin"],
  // Onest comes in weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
})

