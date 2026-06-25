import { type Profile } from "./types"

export const PROFILE: Profile = {
  name: "David Stojanovski",
  role: "Lead Software Engineer",
  year: "2026",
  tagline:
    "A software architect with a master's degree in Computer Science who builds products from the ground up — shaping the architecture, then engineering it end to end, from the first line of code to systems that scale.",
  roles: ["Lead Software Engineer", "Full-Stack Developer", "React & Go Specialist", "System Designer"],
  about: [
    "I'm a Lead Software Engineer with a master's degree in Computer Science and Engineering and nearly a decade of professional experience, focused primarily on web development across a broad range of technologies, practices and architectural principles.",
    "Today I lead engineering at Surfe, a French startup whose product lets any CRM integrate seamlessly with the web and sales tools. I own code quality end to end, shape the product roadmap, and develop and scale both the front-end and back-end.",
    "Along the way I've coordinated a German news platform serving millions of monthly readers, delivered public-health and large-scale e-commerce systems, and mentored 50+ aspiring developers. I care about clean architecture, thoughtful UX, and shipping things that last.",
  ],
  location: "Skopje, North Macedonia",
  email: "david.stojanovski@yahoo.com",
  cvUrl: "/david-stojanovski-cv.pdf",
  stats: [
    { value: "10+", label: "Years building software" },
    { value: "3M+", label: "Monthly readers served" },
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
      role: "Lead Software Engineer — Full-Stack",
      period: "Feb 2022 — Present",
      location: "Paris, France · Remote",
      href: "https://surfe.com/",
      summary: "Leading engineering on a product that lets any CRM integrate seamlessly with websites and sales tools.",
      highlights: [
        "Develop, maintain and scale both front-end and back-end across the platform",
        "Own and continuously raise the quality bar of the codebase",
        "Help shape and draft the product roadmap with the wider team",
      ],
      stack: ["TypeScript", "React", "Vue", "Go", "MongoDB", "TimescaleDB", "PostgreSQL"],
    },
    {
      company: "Netcetera",
      role: "Senior Software Engineer — Full-Stack",
      period: "Jun 2018 — Feb 2022",
      location: "Skopje, North Macedonia",
      href: "https://www.netcetera.com/",
      summary: "Delivered end-to-end solutions across digital media, public health and large-scale e-commerce.",
      highlights: [
        "Tech coordinator for a major German news platform with 3M+ monthly views",
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
