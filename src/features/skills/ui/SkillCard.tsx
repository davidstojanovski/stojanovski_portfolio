import { Code2, Database, Layers, Server, Wrench, type LucideIcon } from "lucide-react"

import { type SkillGroup } from "entities/profile"
import { Badge } from "shared/ui"

const GROUP_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: Layers,
  Backend: Server,
  Data: Database,
  Craft: Wrench,
}

/** Card grouping related skills under a titled icon. */
export function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = GROUP_ICONS[group.title] ?? Code2

  return (
    <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/10">
      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-3 font-semibold">{group.title}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  )
}
