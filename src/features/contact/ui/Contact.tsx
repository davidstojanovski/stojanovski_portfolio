import { Check, Copy, Download, Send } from "lucide-react"

import { PROFILE } from "entities/profile"
import { Button, Reveal, SocialLinks } from "shared/ui"

import { useCopyEmail } from "../model/use-copy-email"

/** Closing call-to-action with email actions and social links. */
export function Contact() {
  const { hasCopied, copyEmail } = useCopyEmail(PROFILE.email)

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 px-6 py-16 text-center backdrop-blur sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-[hsl(var(--brand-via)/0.18)] blur-[90px]" />

          <p className="mb-3 font-mono text-sm tracking-widest text-primary">04 — Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project, a role, or just an idea worth chatting about? My inbox is always open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <a href={`mailto:${PROFILE.email}`}>
                Say hello <Send />
              </a>
            </Button>
            <Button variant="outline" onClick={copyEmail}>
              {hasCopied ? <Check /> : <Copy />}
              {hasCopied ? "Copied!" : PROFILE.email}
            </Button>
          </div>

          <div className="mt-5">
            <Button asChild variant="ghost" className="text-muted-foreground">
              <a href={PROFILE.cvUrl} download>
                <Download /> Download my CV (PDF)
              </a>
            </Button>
          </div>

          <SocialLinks items={PROFILE.socials} className="mt-10 justify-center" />
        </div>
      </Reveal>
    </section>
  )
}
