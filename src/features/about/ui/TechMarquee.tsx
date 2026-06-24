import { cn } from "shared/lib"

/** Seamless infinite marquee of technologies; rendered twice for the loop. */
export function TechMarquee({ items }: { items: string[] }) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              "whitespace-nowrap rounded-full border border-border bg-card/50 px-4 py-2",
              "font-mono text-sm text-muted-foreground backdrop-blur",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
