import { useTypewriter } from "../model/use-typewriter"

/** Typewriter line that cycles through David's roles. */
export function AnimatedRoles({ roles }: { roles: string[] }) {
  const text = useTypewriter(roles)

  return (
    <p className="flex h-8 items-center font-mono text-lg text-muted-foreground sm:text-xl">
      <span className="text-gradient font-semibold">{text}</span>
      <span className="ml-0.5 inline-block h-6 w-0.5 animate-blink bg-primary" aria-hidden="true" />
    </p>
  )
}
