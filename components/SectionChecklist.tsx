"use client";

import type { Workout } from "@/lib/types";
import { applyUnits } from "@/lib/format";
import { useApp } from "@/app/providers";

export function SectionChecklist({ workout }: { workout: Workout }) {
  const { settings, isChecked, toggleChecked } = useApp();

  return (
    <div className="space-y-4">
      {workout.sections.map((section, sIdx) => (
        <div key={section.title} className="card overflow-hidden">
          <div className="border-b border-ink-700 bg-ink-850/60 px-4 py-2.5">
            <h3 className="stencil text-[13px] text-tan">{section.title}</h3>
          </div>
          <ul className="divide-y divide-ink-800">
            {section.items.map((item, idx) => {
              const checked = isChecked(workout.id, sIdx, idx);
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => toggleChecked(workout.id, sIdx, idx)}
                    className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors active:bg-ink-800"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        checked
                          ? "border-signal-green bg-signal-green/15 text-signal-green"
                          : "border-ink-600 text-transparent"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    </span>
                    <span
                      className={`text-[14px] leading-snug transition-colors ${
                        checked ? "text-bone-dim line-through" : "text-bone-muted"
                      }`}
                    >
                      {applyUnits(item, settings.units)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
