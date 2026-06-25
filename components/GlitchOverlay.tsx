function burstStops(y: number): string {
  return [
    `transparent calc(${y}% - 0.15%)`,
    `rgba(255, 255, 255, 0.05) calc(${y}%)`,
    `rgba(255, 70, 70, 0.035) calc(${y + 0.15}%)`,
    `rgba(70, 200, 255, 0.03) calc(${y + 0.3}%)`,
    `transparent calc(${y + 0.45}%)`,
  ].join(", ");
}

function glitchBurstGradient(positions: number[]) {
  return `linear-gradient(to bottom, ${positions.map(burstStops).join(", ")})`;
}

const FULL_PAGE_LAYERS = [
  {
    className: "glitch-overlay__hit glitch-overlay__hit--delay-a",
    positions: [6, 19, 31, 44, 56, 69, 81, 94],
  },
  {
    className: "glitch-overlay__hit glitch-overlay__hit--delay-b",
    positions: [10, 26, 42, 58, 74, 90],
  },
  {
    className: "glitch-overlay__hit glitch-overlay__hit--delay-c",
    positions: [12, 35, 58, 88],
  },
] as const;

export function GlitchOverlay() {
  return (
    <div className="glitch-overlay" aria-hidden="true">
      <div className="glitch-overlay__noise" />
      <div className="glitch-overlay__scanlines" />
      <div className="glitch-overlay__rgb" />
      {FULL_PAGE_LAYERS.map((layer) => (
        <div
          key={layer.className}
          className={layer.className}
          style={{ background: glitchBurstGradient([...layer.positions]) }}
        />
      ))}
    </div>
  );
}
