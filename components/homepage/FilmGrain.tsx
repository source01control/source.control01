export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[300] opacity-[0.12] mix-blend-overlay"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] bg-repeat opacity-80" />
    </div>
  );
}
