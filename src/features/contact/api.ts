import { PROFILE } from "entities/profile"

export type ContactMessage = {
  name: string
  email: string
  message: string
  /** Hidden anti-spam field — real users never fill it. */
  honeypot: string
}

/**
 * Deliver a contact message straight to the portfolio inbox via FormSubmit's
 * AJAX endpoint — no server or API key required for a static site.
 */
export async function sendContactMessage(payload: ContactMessage): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      message: payload.message,
      _honey: payload.honeypot,
      _subject: `Portfolio message from ${payload.name}`,
      _template: "table",
      _captcha: "false",
    }),
  })

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`)
  }
}
