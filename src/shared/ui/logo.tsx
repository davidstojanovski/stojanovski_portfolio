import { useId } from "react"

import { cn } from "shared/lib"

type LogoProps = {
  /** Sizes/positions the wrapper (mark + optional wordmark). */
  className?: string
  /** Override the mark size (defaults to 2rem square). */
  markClassName?: string
  /** Render the wordmark text beside the mark. */
  withWordmark?: boolean
  wordmark?: string
}

/**
 * Brand mark: an isometric gradient cube — "built from the ground up".
 * Three shaded faces give it depth; works on light and dark surfaces.
 */
export function Logo({ className, markClassName, withWordmark = false, wordmark = "david.dev" }: LogoProps) {
  const id = useId()
  const top = `cube-top-${id}`
  const left = `cube-left-${id}`
  const right = `cube-right-${id}`

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn("size-8 shrink-0", markClassName)}
        role="img"
        aria-label="David Stojanovski logo"
      >
        <defs>
          <linearGradient id={top} x1="9" y1="7" x2="55" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D3EE" />
            <stop offset="1" stopColor="#2C9BE8" />
          </linearGradient>
          <linearGradient id={left} x1="9" y1="20" x2="32" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2C7BE5" />
            <stop offset="1" stopColor="#3F38C9" />
          </linearGradient>
          <linearGradient id={right} x1="32" y1="20" x2="55" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C5CF0" />
            <stop offset="1" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
        <polygon points="32,6 55,19.5 32,33 9,19.5" fill={`url(#${top})`} />
        <polygon points="9,19.5 32,33 32,58 9,44.5" fill={`url(#${left})`} />
        <polygon points="55,19.5 32,33 32,58 55,44.5" fill={`url(#${right})`} />
        <path
          d="M32 6 L55 19.5 L32 33 L9 19.5 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.28"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
      {withWordmark && <span className="font-mono text-sm font-bold tracking-tight">{wordmark}</span>}
    </span>
  )
}
