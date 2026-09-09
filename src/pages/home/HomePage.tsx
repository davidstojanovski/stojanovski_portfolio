import { About } from "features/about"
import { Contact } from "features/contact"
import { Experience } from "features/experience"
import { MotherboardBackground } from "features/motherboard/MotherboardBackground"
import { Hero } from "features/hero"
import { SiteFooter } from "features/site-footer"
import { SiteNav } from "features/site-nav"
import { Skills } from "features/skills"

export function HomePage() {
  return (
    <div className="relative isolate min-h-screen">
      <MotherboardBackground />
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
