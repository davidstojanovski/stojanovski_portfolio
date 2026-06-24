import { useEffect, useState } from "react"

const TYPE_MS = 65
const DELETE_MS = 35
const PAUSE_MS = 1600

/** Cycle through phrases with a typewriter typing/deleting effect. */
export function useTypewriter(phrases: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index] ?? ""
    const isComplete = !isDeleting && text === current
    const isEmpty = isDeleting && text === ""
    const delay = isComplete ? PAUSE_MS : isDeleting ? DELETE_MS : TYPE_MS

    const timer = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true)
        return
      }
      if (isEmpty) {
        setIsDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
        return
      }
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(timer)
  }, [phrases, index, text, isDeleting])

  return text
}
