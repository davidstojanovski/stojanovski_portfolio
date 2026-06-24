import { PROFILE } from "entities/profile"
import { Reveal, Section } from "shared/ui"

import { SkillCard } from "./SkillCard"

/** Responsive grid of skill groups. */
export function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Skills" title="My toolbox">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILE.skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 80}>
            <SkillCard group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
