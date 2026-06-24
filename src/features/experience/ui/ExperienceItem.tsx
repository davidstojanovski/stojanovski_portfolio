import { ArrowUpRight } from "lucide-react"

import { type Experience } from "entities/profile"
import { Badge } from "shared/ui"

/** One role on the timeline: header, highlights and tech stack. */
export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative pl-10 sm:pl-14">
      <span className="absolute left-[7px] top-2 size-3 rounded-full gradient-ring ring-4 ring-background sm:left-[15px]" />

      <article className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <span className="font-mono text-xs text-muted-foreground">{experience.period}</span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-sm">
          {experience.href ? (
            <a
              href={experience.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              {experience.company}
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <span className="font-medium text-primary">{experience.company}</span>
          )}
          <span className="text-muted-foreground">· {experience.location}</span>
        </div>

        <p className="mt-3 text-muted-foreground">{experience.summary}</p>

        <ul className="mt-4 space-y-2">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </article>
    </div>
  )
}
