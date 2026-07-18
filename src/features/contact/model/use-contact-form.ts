import { useMutation } from "@tanstack/react-query"
import { type FormEvent } from "react"
import { toast } from "sonner"

import { sendContactMessage, type ContactMessage } from "../api"

/** Read the submitted fields, send them, and reset the form on success. */
export function useContactForm() {
  const mutation = useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => toast.success("Message sent — I'll get back to you soon!"),
    onError: () => toast.error("Something went wrong — please email me directly instead."),
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload: ContactMessage = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      honeypot: String(data.get("_honey") ?? ""),
    }

    mutation.mutate(payload, { onSuccess: () => form.reset() })
  }

  return { handleSubmit, isSending: mutation.isPending }
}
