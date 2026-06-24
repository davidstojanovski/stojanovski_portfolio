import { useEffect, useRef, useState } from "react"

type Options = {
  /** Fraction of the element visible before it is considered revealed. */
  threshold?: number
  /** Reveal only once and then stop observing. */
  once?: boolean
}

/**
 * Observe an element and report when it scrolls into the viewport.
 * Used to drive entrance animations without an animation library.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
