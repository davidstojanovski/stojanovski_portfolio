import { withBase } from "shared/lib"

import { type Profile } from "./types"

export const PROFILE: Profile = {
  name: "David Stojanovski",
  role: "Lead RevOps Engineer",
  year: "2026",
  tagline:
    "An engineer with a master's degree in Computer Science who sits between engineering and go-to-market — building the systems, data and automation that help teams ship faster and sell smarter, and advising them on GTM strategy, analytics and data along the way.",
  roles: ["Lead RevOps Engineer", "GTM & Analytics Advisor", "Full-Stack Engineer", "System Designer"],
  about: [
    "I'm a Lead RevOps Engineer with a master's degree in Computer Science and Engineering and nearly a decade of professional experience. I started as a full-stack engineer and architect, and today I work where engineering meets go-to-market — turning revenue problems into systems, data pipelines and automation.",
    "Today I lead Revenue Operations engineering for a B2B SaaS product. I design the data models, pipelines and tooling behind the go-to-market motion, build the CRM integrations and automations that keep sales, marketing and customer teams moving, and work with leadership on GTM strategy, attribution and analytics.",
    "Before that I led full-stack engineering on the same product, coordinated the delivery of a high-traffic news platform, built public-health and large-scale e-commerce systems, and mentored 50+ aspiring developers. I help teams with engineering, and I can consult them on GTM, analytics and data just as readily.",
  ],
  location: "Skopje, North Macedonia",
  email: "david.stojanovski@yahoo.com",
  cvUrl: withBase("david-stojanovski-cv.pdf"),
  stats: [
    { value: "10+", label: "Years building software" },
    { value: "50+", label: "Developers mentored" },
    { value: "9.8", label: "MSc final grade / 10" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/davidstojanovski/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:david.stojanovski@yahoo.com", icon: "mail" },
    { label: "Skopje, North Macedonia", href: "#about", icon: "mapPin" },
  ],
  experiences: [
    {
      company: "Surfe",
      role: "Lead RevOps Engineer",
      period: "Feb 2022 — Present",
      location: "Paris, France · Remote",
      href: "https://surfe.com/",
      summary:
        "Leading Revenue Operations engineering for a product that lets any CRM integrate seamlessly with websites and sales tools, after first leading its full-stack engineering.",
      highlights: [
        "Design and build the data, tooling and automation behind the GTM motion across sales, marketing and customer teams",
        "Partner with GTM leadership on strategy, analytics and data, turning revenue questions into measurable systems",
        "Previously led full-stack engineering: owned code quality end to end and helped shape the product roadmap",
      ],
      stack: ["TypeScript", "Go", "Python", "PostgreSQL", "BigQuery", "HubSpot", "React"],
    },
    {
      company: "Netcetera",
      role: "Senior Software Engineer — Full-Stack",
      period: "Jun 2018 — Feb 2022",
      location: "Skopje, North Macedonia",
      href: "https://www.netcetera.com/",
      summary: "Delivered end-to-end solutions across digital media, public health and large-scale e-commerce.",
      highlights: [
        "Tech coordinator for a major German news platform, leading delivery across a microservices architecture",
        "Led client communication, task delegation and full-stack work across a microservices architecture",
        "Built a Swiss cantonal health-promotion platform and one of the country's largest ticket-reservation systems",
      ],
      stack: ["TypeScript", "React", "Node.js", "Java Spring", "PostgreSQL"],
    },
    {
      company: "Codeacademy Macedonia",
      role: "Web Developer Mentor / Trainer",
      period: "Dec 2018 — Sep 2019",
      location: "Skopje, North Macedonia",
      href: "https://codecademy.mk/",
      summary: "Mentored 50+ students, tailoring lessons to newcomers with modern, state-of-the-art web technologies.",
      highlights: [
        "Designed approachable curriculum for developers starting from scratch",
        "Taught JavaScript, TypeScript, React, HTML and CSS hands-on",
      ],
      stack: ["JavaScript", "TypeScript", "React", "HTML", "CSS"],
    },
    {
      company: "One Inside",
      role: "Java Software Developer",
      period: "Sep 2017 — May 2018",
      location: "Skopje, North Macedonia",
      summary: "Built AEM components and services with SOLR-powered search for enterprise content platforms.",
      highlights: [
        "Implemented Adobe AEM/CQ5 components and OSGi services",
        "Developed SOLR search integrations backed by unit tests",
      ],
      stack: ["Java", "Apache Sling", "Adobe AEM", "OSGi", "JCR"],
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Go", "Java", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React", "Vue", "Tailwind CSS", "HTML & CSS", "Vite"],
    },
    {
      title: "Backend",
      skills: ["Go", "Node.js", "NestJS", "Java Spring", "Django"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "TimescaleDB"],
    },
    {
      title: "GTM & RevOps",
      skills: ["Revenue Operations", "GTM Strategy", "CRM Architecture", "Sales & Marketing Automation", "Analytics"],
    },
    {
      title: "Craft",
      skills: ["Microservices", "System Design", "Code Quality", "Mentoring", "Roadmapping"],
    },
  ],
  education: [
    {
      degree: "MSc, Software Engineering",
      school: "Ss. Cyril and Methodius University — FCSE",
      period: "2023 — 2025",
      detail: "Final grade 9.8 / 10",
    },
    {
      degree: "BSc, Computer Science & Engineering",
      school: "Ss. Cyril and Methodius University — FCSE",
      period: "2014 — 2018",
    },
  ],
}
