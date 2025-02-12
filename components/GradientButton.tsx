import type React from "react"
import { Button } from "@/components/ui/button"

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <Button
      className={`
        bg-gradient-to-r from-[#0055ff] to-[#0099ff] text-white
        hover:bg-white hover:text-[#0055ff] hover:from-white hover:to-white
        transition-all duration-300 ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  )
}

