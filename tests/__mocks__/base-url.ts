/** Jest stand-in for `shared/lib/base-url` — no `import.meta` in CommonJS. */
export function withBase(path: string): string {
  return `/${path.replace(/^\//, "")}`
}
