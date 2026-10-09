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

/** Solid blue D monogram with a forward-slash cutout. */
export function Logo({ className, markClassName, withWordmark = false, wordmark = "davidstojanovski.com" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn("size-8 shrink-0", markClassName)}
        role="img"
        aria-label="David Stojanovski logo"
      >
        <path
          d="M12 10H29C45 10 54 19 54 32S45 54 29 54H12V10ZM33 21L23 43H30L40 21H33Z"
          className="fill-primary"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      {withWordmark && <span className="font-mono text-sm font-bold tracking-tight">{wordmark}</span>}
    </span>
  )
}
