import { About } from "features/about"
import { Contact } from "features/contact"
import { Experience } from "features/experience"
import { Hero } from "features/hero"
import { SiteFooter } from "features/site-footer"
import { SiteNav } from "features/site-nav"
import { Skills } from "features/skills"

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
