import { clsx } from "clsx"

export function Button({ className, variant = "default", ...props }) {
  const buttonClasses = clsx(
    "inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2",
    variant === "default" && "bg-[#0055ff] text-white hover:bg-[#0055ff]/90",
    variant === "outline" && "border-white text-white hover:bg-white/10",
    className,
  )

  return <button className={buttonClasses} {...props} />
}

