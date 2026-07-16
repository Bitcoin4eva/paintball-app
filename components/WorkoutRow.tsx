"use client";

import Link from "next/link";
import type { Workout } from "@/lib/types";
import { DAY_ABBR, INTENSITY, TYPE } from "@/lib/ui";
import { humanMinutes } from "@/lib/format";
import { TypeGlyph } from "./TypeGlyph";
import { CheckDot } from "./Bits";
import { useApp } from "@/app/providers";

export function WorkoutRow({
  workout,
  showDay = true,
  highlight = false,
}: {
  workout: Workout;
  showDay?: boolean;
  highlight?: boolean;
}) {
  const { isCompleted } = useApp();
  const done = isCompleted(workout.id);
  const t = TYPE[workout.type];
  const i = INTENSITY[workout.intensity];

  return (
    <Link
      href={`/workout/${workout.id}`}
      className={`card group flex items-center gap-3 border-l-4 p-3 transition-colors active:bg-ink-800 ${t.edge} ${
        highlight ? "ring-1 ring-tan/40" : ""
      }`}
    >
      <div className={`shrink-0 ${t.accent}`}>
        <TypeGlyph type={workout.type} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {showDay && (
            <span className="font-mono text-[10px] uppercase tracking-widelabel text-bone-dim">
              {DAY_ABBR[workout.day] ?? workout.day}
            </span>
          )}
          <span className={`h-1.5 w-1.5 rounded-full ${i.dot}`} aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-widelabel text-bone-dim">
            {humanMinutes(workout.estimatedMinutes)}
          </span>
        </div>
        <div className="truncate font-display text-[15px] uppercase tracking-[0.02em] text-bone">
          {workout.title}
        </div>
      </div>

      <CheckDot done={done} />
    </Link>
  );
}
