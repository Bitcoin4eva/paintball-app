"use client";

import Link from "next/link";
import { useApp } from "../providers";
import {
  ALL_WORKOUTS,
  getWeekWorkouts,
  getWorkoutByWeekDay,
  TOTAL_WEEKS,
} from "@/lib/program";
import { INTENSITY, TYPE } from "@/lib/ui";
import { ProgressBar } from "@/components/Bits";
import type { WorkoutType } from "@/lib/types";

const TYPE_ORDER: WorkoutType[] = ["gym", "run", "recovery", "paintball"];

export default function ProgressPage() {
  const { overallProgress, weekProgress, isCompleted } = useApp();
  const op = overallProgress();

  const typeCounts = TYPE_ORDER.map((type) => {
    const all = ALL_WORKOUTS.filter((w) => w.type === type);
    const done = all.filter((w) => isCompleted(w.id)).length;
    return { type, done, total: all.length };
  });

  const weeks = Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);

  const benchmarks = [4, 8]
    .map((wk) => getWorkoutByWeekDay(wk, "Monday"))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));

  return (
    <div className="space-y-6">
      <header className="pt-1">
        <h1 className="font-display text-2xl font-bold uppercase tracking-stencil text-bone">
          Progress
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-widelabel text-tan">
          Consistency Wins Games
        </p>
      </header>

      {/* overall ring stat */}
      <section className="card p-5">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Program Complete</span>
            <div className="mt-1 font-display text-5xl font-bold leading-none text-tan">
              {op.pct}
              <span className="text-2xl text-bone-dim">%</span>
            </div>
          </div>
          <div className="text-right font-mono text-sm text-bone-muted">
            {op.done}
            <span className="text-bone-dim"> / {op.total}</span>
            <div className="text-[11px] uppercase tracking-widelabel text-bone-dim">
              sessions
            </div>
          </div>
        </div>
        <ProgressBar pct={op.pct} className="mt-4 h-2.5" />
      </section>

      {/* per-week */}
      <section className="space-y-2">
        <span className="eyebrow">By Week</span>
        <div className="card divide-y divide-ink-800">
          {weeks.map((w) => {
            const p = weekProgress(w);
            const complete = p.done === p.total && p.total > 0;
            return (
              <div key={w} className="flex items-center gap-3 px-4 py-3">
                <span className="w-9 shrink-0 font-display text-sm font-bold uppercase tracking-stencil text-bone-muted">
                  W{w}
                </span>
                <div className="min-w-0 flex-1">
                  <ProgressBar pct={p.pct} tone={complete ? "bg-signal-green" : "bg-tan"} />
                </div>
                <span className="w-12 shrink-0 text-right font-mono text-[11px] text-bone-dim">
                  {p.done}/{p.total}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* type breakdown */}
      <section className="space-y-2">
        <span className="eyebrow">By Training Type</span>
        <div className="grid grid-cols-2 gap-2">
          {typeCounts.map(({ type, done, total }) => (
            <div key={type} className={`card border-l-4 p-3 ${TYPE[type].edge}`}>
              <div className={`font-mono text-[11px] uppercase tracking-widelabel ${TYPE[type].accent}`}>
                {TYPE[type].label}
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-bone">
                {done}
                <span className="text-base text-bone-dim">/{total}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benchmarks */}
      {benchmarks.length > 0 && (
        <section className="space-y-2">
          <span className="eyebrow">Benchmark Tests</span>
          <div className="space-y-2">
            {benchmarks.map((w) => (
              <Link
                key={w.id}
                href={`/workout/${w.id}`}
                className="card flex items-center justify-between p-3 active:bg-ink-800"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widelabel text-tan">
                    Week {w.week} ◆
                  </div>
                  <div className="font-display text-[15px] uppercase tracking-[0.02em] text-bone">
                    {w.title}
                  </div>
                </div>
                <span
                  className={`h-2 w-2 rounded-full ${
                    isCompleted(w.id) ? INTENSITY[w.intensity].bar : "bg-ink-600"
                  }`}
                />
              </Link>
            ))}
          </div>
          <p className="px-1 pt-1 text-[12px] leading-relaxed text-bone-dim">
            Log your sprint times, broad jump, and HR-recovery numbers in each
            benchmark&apos;s notes to track carryover across the block.
          </p>
        </section>
      )}
    </div>
  );
}
