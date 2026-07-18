import { Check, Copy, Download } from "lucide-react"

import { PROFILE } from "entities/profile"
import { Button, SocialLinks } from "shared/ui"

import { useCopyEmail } from "../model/use-copy-email"

/** Intro copy plus direct ways to reach out — email, CV and socials. */
export function ContactDetails() {
  const { hasCopied, copyEmail } = useCopyEmail(PROFILE.email)

  return (
    <div className="flex flex-col items-start text-left">
      <p className="mb-3 font-mono text-sm tracking-widest text-primary">04 — Contact</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s build something <span className="text-gradient">great</span>
      </h2>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Have a project, a role, or just an idea worth chatting about? Drop me a message and it lands straight in my
        inbox — I usually reply within a day.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={copyEmail}>
          {hasCopied ? <Check /> : <Copy />}
          {hasCopied ? "Copied!" : PROFILE.email}
        </Button>
        <Button asChild variant="ghost" className="text-muted-foreground">
          <a href={PROFILE.cvUrl} download>
            <Download /> Download my CV
          </a>
        </Button>
      </div>

      <SocialLinks items={PROFILE.socials} className="mt-8" />
    </div>
  )
}
