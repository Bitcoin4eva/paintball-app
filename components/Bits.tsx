import type { Intensity } from "@/lib/types";
import { INTENSITY } from "@/lib/ui";

export function IntensityBadge({ intensity }: { intensity: Intensity }) {
  const s = INTENSITY[intensity];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widelabel ${s.chip}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

export function ProgressBar({
  pct,
  className = "",
  tone = "bg-tan",
}: {
  pct: number;
  className?: string;
  tone?: string;
}) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-ink-750 ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-500 ${tone}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export function CheckDot({ done }: { done: boolean }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${
        done
          ? "border-signal-green bg-signal-green/15 text-signal-green"
          : "border-ink-600 text-transparent"
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 6" />
      </svg>
    </span>
  );
}
