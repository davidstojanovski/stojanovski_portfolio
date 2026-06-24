/** Decorative animated gradient blobs and dotted grid behind the hero. */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" />
      <div className="absolute -left-24 top-10 size-[28rem] animate-blob rounded-full bg-[hsl(var(--brand-from)/0.22)] blur-[100px]" />
      <div className="absolute -right-20 top-32 size-[26rem] animate-blob rounded-full bg-[hsl(var(--brand-via)/0.20)] blur-[100px] [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[24rem] animate-blob rounded-full bg-[hsl(var(--brand-to)/0.18)] blur-[100px] [animation-delay:-12s]" />
    </div>
  )
}
