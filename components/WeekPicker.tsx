"use client";

import { TOTAL_WEEKS } from "@/lib/program";

export function WeekPicker({
  value,
  onChange,
  label = "Select week",
}: {
  value: number;
  onChange: (week: number) => void;
  label?: string;
}) {
  const weeks = Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);
  return (
    <div>
      <span className="sr-only">{label}</span>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-1">
        {weeks.map((w) => {
          const active = w === value;
          return (
            <button
              key={w}
              type="button"
              onClick={() => onChange(w)}
              aria-pressed={active}
              className={`btn h-11 min-w-[52px] shrink-0 border px-3 text-[13px] ${
                active
                  ? "border-tan bg-tan text-ink-950 shadow-glow"
                  : "border-ink-700 bg-ink-850 text-bone-muted hover:text-bone"
              }`}
            >
              W{w}
            </button>
          );
        })}
      </div>
    </div>
  );
}
