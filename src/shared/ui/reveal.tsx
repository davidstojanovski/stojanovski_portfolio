import { type CSSProperties, type ReactNode } from "react"

import { cn, useScrollReveal } from "shared/lib"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in milliseconds. */
  delay?: number
}

/** Fade-and-rise wrapper that triggers when scrolled into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
      className={cn(
        "translate-y-6 opacity-0 transition-all duration-700 ease-out will-change-transform",
        isVisible && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  )
}
