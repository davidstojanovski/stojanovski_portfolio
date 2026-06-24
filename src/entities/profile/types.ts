export type Social = {
  label: string
  href: string
  /** lucide-react icon name, resolved at the UI layer. */
  icon: "linkedin" | "mail" | "github" | "mapPin"
}

export type Stat = {
  value: string
  label: string
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
  href?: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
  detail?: string
}

export type Profile = {
  name: string
  role: string
  year: string
  tagline: string
  roles: string[]
  about: string[]
  location: string
  email: string
  cvUrl: string
  stats: Stat[]
  socials: Social[]
  experiences: Experience[]
  skillGroups: SkillGroup[]
  education: Education[]
}
