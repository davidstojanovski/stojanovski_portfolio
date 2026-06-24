import { AtSign, Mail, MapPin, type LucideIcon } from "lucide-react"
import { type ComponentType, type SVGProps } from "react"

import { cn } from "shared/lib"

import { LinkedInIcon } from "./icons"

export type SocialIcon = "linkedin" | "mail" | "github" | "mapPin"

export type SocialItem = {
  label: string
  href: string
  icon: SocialIcon
}

const ICONS: Record<SocialIcon, LucideIcon | ComponentType<SVGProps<SVGSVGElement>>> = {
  linkedin: LinkedInIcon,
  mail: Mail,
  mapPin: MapPin,
  github: AtSign,
}

type SocialLinksProps = {
  items: SocialItem[]
  className?: string
}

/** Row of icon buttons linking to external profiles. */
export function SocialLinks({ items, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map((item) => {
        const Icon = ICONS[item.icon]
        const isExternal = item.href.startsWith("http")
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="grid size-11 place-items-center rounded-full border border-border bg-background/40 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
          >
            <Icon className="size-5" />
          </a>
        )
      })}
    </div>
  )
}
