type PageHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
};

export function PageHeader({ title, subtitle, label = "TRANSMISSION" }: PageHeaderProps) {
  return (
    <header className="border-b border-white/20 pt-24 sm:pt-28 lg:pt-32">
      <div className="px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
        <p className="section-label mb-6">{label}</p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(4rem,14vw,10rem)] leading-[0.78] tracking-[0.04em]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-mono)] text-[10px] sm:text-[11px] tracking-[0.08em] leading-relaxed text-white/45">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
