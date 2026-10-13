import { Languages } from "lucide-react"

import { type SpokenLanguage } from "entities/profile"

/** Spoken languages with proficiency, shown in the about sidebar. */
export function LanguagesCard({ languages }: { languages: SpokenLanguage[] }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:border-primary/40">
      <Languages className="mt-0.5 size-5 shrink-0 text-primary" />
      <ul className="w-full space-y-1.5">
        {languages.map((language) => (
          <li key={language.name} className="flex flex-wrap items-baseline justify-between gap-x-3">
            <span className="font-semibold">{language.name}</span>
            <span className="font-mono text-xs text-muted-foreground">{language.level}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
