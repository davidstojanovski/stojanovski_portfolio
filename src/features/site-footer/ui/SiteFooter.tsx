import { PROFILE } from "entities/profile"
import { Logo } from "shared/ui"

/** Minimal closing footer. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo markClassName="size-7" />
          <p>
            © {PROFILE.year} {PROFILE.name}
          </p>
        </div>
        <p className="font-mono text-xs">Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
