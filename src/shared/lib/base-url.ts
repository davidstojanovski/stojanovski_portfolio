/**
 * Prefix a public-asset path with Vite's configured base URL, so links keep
 * working when the site is served from a sub-path (e.g. GitHub Pages).
 *
 * Jest maps this module to `tests/__mocks__/base-url.ts` because `import.meta`
 * is unavailable under the CommonJS test transform.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
