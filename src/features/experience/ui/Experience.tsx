import { PROFILE } from "entities/profile"
import { Reveal, Section } from "shared/ui"

import { ExperienceItem } from "./ExperienceItem"

/** Vertical timeline of professional roles. */
export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've made an impact">
      <div className="relative space-y-6">
        <span className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[23px]" />
        {PROFILE.experiences.map((experience, index) => (
          <Reveal key={experience.company} delay={index * 90}>
            <ExperienceItem experience={experience} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
