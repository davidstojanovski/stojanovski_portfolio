import { PROFILE } from "entities/profile"
import { Reveal, Section } from "shared/ui"

import { EducationCard } from "./EducationCard"
import { TechMarquee } from "./TechMarquee"

const MARQUEE_ITEMS = PROFILE.skillGroups.flatMap((group) => group.skills)

/** Narrative bio paired with an education panel and tech marquee. */
export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {PROFILE.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 100}>
              <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          <Reveal>
            <h3 className="font-mono text-sm tracking-widest text-primary">EDUCATION</h3>
          </Reveal>
          {PROFILE.education.map((education, index) => (
            <Reveal key={education.degree} delay={index * 120}>
              <EducationCard education={education} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <TechMarquee items={MARQUEE_ITEMS} />
      </div>
    </Section>
  )
}
