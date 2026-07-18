import { Reveal } from "shared/ui"

import { ContactDetails } from "./ContactDetails"
import { ContactForm } from "./ContactForm"

/** Closing section — contact details beside a direct message form. */
export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 left-1/4 size-72 -translate-x-1/2 rounded-full bg-[hsl(var(--brand-via)/0.18)] blur-[90px]" />

          <div className="relative grid gap-12 px-6 py-14 sm:px-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
