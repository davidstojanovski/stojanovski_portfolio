import { useState } from "react"
import { toast } from "sonner"

/** Copy an email to the clipboard and surface a confirmation toast. */
export function useCopyEmail(email: string) {
  const [hasCopied, setHasCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setHasCopied(true)
      toast.success("Email copied to clipboard")
      setTimeout(() => setHasCopied(false), 2000)
    } catch {
      toast.error("Couldn't copy — please copy it manually")
    }
  }

  return { hasCopied, copyEmail }
}
