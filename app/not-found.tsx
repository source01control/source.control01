import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 border-b border-white">
      <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] text-white/35">
        ERROR 404
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-7xl sm:text-9xl tracking-[0.05em] mt-4 leading-none">
        SIGNAL LOST
      </h1>
      <p className="mt-6 font-[family-name:var(--font-mono)] text-sm tracking-[0.12em] text-white/45 text-center max-w-md">
        The requested frequency does not exist on this grid. Return to base
        transmission.
      </p>
      <Link
        href="/"
        className="mt-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.25em] border-2 border-white px-10 py-4 hover:bg-white hover:text-black transition-colors"
      >
        RETURN HOME →
      </Link>
    </div>
  );
}
