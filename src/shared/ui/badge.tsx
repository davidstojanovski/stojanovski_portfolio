import { type HTMLAttributes } from "react"

import { cn } from "shared/lib"

/** Small pill used for tech tags and section eyebrows. */
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary",
        className,
      )}
      {...props}
    />
  )
}
