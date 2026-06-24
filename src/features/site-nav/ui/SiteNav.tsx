import { Menu, X } from "lucide-react"
import { useState } from "react"

import { useActiveSection } from "shared/lib"
import { Button, Logo } from "shared/ui"
import { ThemeToggle } from "features/theme-toggle"

import { SECTION_IDS } from "../model/nav-items"
import { NavLinks } from "./NavLinks"

/** Sticky frosted top navigation with scroll-spy and a mobile sheet. */
export function SiteNav() {
  const activeId = useActiveSection(SECTION_IDS)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2 shadow-lg shadow-black/5">
        <a
          href="#home"
          aria-label="David Stojanovski — home"
          className="pl-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Logo withWordmark className="[&>span:last-child]:hidden sm:[&>span:last-child]:inline" />
        </a>

        <div className="hidden md:block">
          <NavLinks activeId={activeId} />
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="glass mx-auto mt-2 max-w-5xl animate-fade-in rounded-3xl p-3 md:hidden">
          <NavLinks activeId={activeId} orientation="vertical" onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  )
}
