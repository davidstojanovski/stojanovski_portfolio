import { type ReactNode } from "react"

import { cn } from "shared/lib"

import { Reveal } from "./reveal"

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  className?: string
}

/** Standard anchored content section with an animated heading. */
export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 sm:py-32", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-sm tracking-widest text-primary">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
