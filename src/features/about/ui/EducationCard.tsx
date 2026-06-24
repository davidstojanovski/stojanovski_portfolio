import { GraduationCap } from "lucide-react"

import { type Education } from "entities/profile"

/** Single education entry shown in the about sidebar. */
export function EducationCard({ education }: { education: Education }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:border-primary/40">
      <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <p className="font-semibold leading-snug">{education.degree}</p>
        <p className="text-sm text-muted-foreground">{education.school}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {education.period}
          {education.detail ? ` · ${education.detail}` : ""}
        </p>
      </div>
    </div>
  )
}
