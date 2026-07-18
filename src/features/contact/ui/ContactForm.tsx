import { Loader2, Send } from "lucide-react"

import { Button, Input, Label, Textarea } from "shared/ui"

import { useContactForm } from "../model/use-contact-form"

/** Direct contact form — name, email and message delivered straight to the inbox. */
export function ContactForm() {
  const { handleSubmit, isSending } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            placeholder="Jane Doe"
            autoComplete="name"
            required
            disabled={isSending}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            required
            disabled={isSending}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project, role or idea…"
          required
          disabled={isSending}
        />
      </div>

      {/* Honeypot — hidden from people, tempting for bots. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <Button type="submit" disabled={isSending} className="justify-self-start">
        {isSending ? <Loader2 className="animate-spin" /> : <Send />}
        {isSending ? "Sending…" : "Send message"}
      </Button>
    </form>
  )
}
