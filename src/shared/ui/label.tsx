import { forwardRef, type LabelHTMLAttributes } from "react"

import { cn } from "shared/lib"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return <label ref={ref} className={cn("text-sm font-medium leading-none text-foreground/90", className)} {...props} />
})
Label.displayName = "Label"
