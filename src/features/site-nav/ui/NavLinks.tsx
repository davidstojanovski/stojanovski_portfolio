import { cn } from "shared/lib"

import { NAV_ITEMS } from "../model/nav-items"

type NavLinksProps = {
  activeId: string
  orientation?: "horizontal" | "vertical"
  onNavigate?: () => void
}

/** Anchor list shared by the desktop bar and the mobile sheet. */
export function NavLinks({ activeId, orientation = "horizontal", onNavigate }: NavLinksProps) {
  return (
    <ul className={cn("flex gap-1", orientation === "vertical" ? "flex-col" : "items-center")}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              className={cn(
                "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && <span className="absolute inset-0 -z-10 rounded-full bg-accent" />}
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
