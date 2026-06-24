import { useEffect, useState } from "react"

/**
 * Track which section id is currently centred in the viewport so the
 * navigation can highlight the active anchor while scrolling.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)
      .forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
