import { type Stat } from "entities/profile"
import { Reveal } from "shared/ui"

/** Compact metrics strip beneath the hero call-to-action. */
export function HeroStats({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 90}>
          <div className="h-full bg-card/60 p-4 text-center backdrop-blur sm:text-left">
            <dt className="text-2xl font-bold text-gradient">{stat.value}</dt>
            <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
          </div>
        </Reveal>
      ))}
    </dl>
  )
}
