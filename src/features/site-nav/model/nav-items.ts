export type NavItem = {
  id: string
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id)
