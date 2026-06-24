import { useRef, type MouseEvent } from "react"

/**
 * Track the cursor within an element and expose its position as CSS
 * custom properties (`--spot-x` / `--spot-y`) for a follow-the-mouse glow.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  const onMouseMove = (event: MouseEvent<T>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
