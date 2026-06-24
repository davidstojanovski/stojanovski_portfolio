import { ArrowRight, ChevronDown, Download, Sparkles } from "lucide-react"

import { PROFILE } from "entities/profile"
import { Button, SocialLinks } from "shared/ui"

import { useSpotlight } from "../model/use-spotlight"
import { AnimatedRoles } from "./AnimatedRoles"
import { HeroBackdrop } from "./HeroBackdrop"
import { HeroStats } from "./HeroStats"

/** Landing viewport: name, rotating role, tagline, CTAs and key stats. */
export function Hero() {
  const { ref, onMouseMove } = useSpotlight<HTMLElement>()

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="group relative flex min-h-screen items-center overflow-hidden pt-28"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 0%), hsl(var(--brand-via) / 0.10), transparent 70%)",
      }}
    >
      <HeroBackdrop />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Available for consulting & freelance projects
        </div>

        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-primary">
          <Sparkles className="size-4" /> Hi, I&apos;m
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-gradient">{PROFILE.name}</span>
        </h1>

        <div className="mt-4">
          <AnimatedRoles roles={PROFILE.roles} />
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{PROFILE.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild>
            <a href="#contact">
              Get in touch <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={PROFILE.cvUrl} download>
              Download CV <Download />
            </a>
          </Button>
          <SocialLinks items={PROFILE.socials} className="ml-1" />
        </div>

        <div className="mt-14">
          <HeroStats stats={PROFILE.stats} />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute inset-x-0 bottom-8 mx-auto grid size-10 place-items-center text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
