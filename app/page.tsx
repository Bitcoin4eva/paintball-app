"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useApp } from "./providers";
import {
  getWeekWorkouts,
  getWorkoutByWeekDay,
  todayName,
  TOTAL_WEEKS,
} from "@/lib/program";
import { INTENSITY, TYPE, DAY_ABBR } from "@/lib/ui";
import { humanMinutes } from "@/lib/format";
import { TypeGlyph } from "@/components/TypeGlyph";
import { WorkoutRow } from "@/components/WorkoutRow";
import { WeekPicker } from "@/components/WeekPicker";
import { ProgressBar, IntensityBadge } from "@/components/Bits";

export default function DashboardPage() {
  const { settings, setCurrentWeek, weekProgress, overallProgress, hydrated } =
    useApp();
  const week = settings.currentWeek;

  const today = useMemo(() => todayName(new Date()), []);
  const todaysWorkout = getWorkoutByWeekDay(week, today);
  const weekWorkouts = getWeekWorkouts(week);
  const wp = weekProgress(week);
  const op = overallProgress();

  return (
    <div className="space-y-6">
      {/* brand header */}
      <header className="flex items-center justify-between pt-1">
        <div>
          <h1 className="font-display text-2xl font-bold uppercase tracking-stencil text-bone">
            Lean In
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-widelabel text-tan">
            Paintball Performance
          </p>
        </div>
        <div className="text-right">
          <div className="font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
            Week
          </div>
          <div className="font-display text-3xl font-bold leading-none text-tan">
            {week}
            <span className="text-base text-bone-dim">/{TOTAL_WEEKS}</span>
          </div>
        </div>
      </header>

      {/* today hero */}
      <section>
        <div className="mb-2 flex items-center justify-between">
          <span className="eyebrow">Today · {DAY_ABBR[today] ?? today}</span>
        </div>

        {todaysWorkout ? (
          <Link
            href={`/workout/${todaysWorkout.id}`}
            className="card block overflow-hidden active:opacity-95"
          >
            <div className={`h-1.5 w-full ${INTENSITY[todaysWorkout.intensity].bar}`} />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={TYPE[todaysWorkout.type].accent}>
                      <TypeGlyph type={todaysWorkout.type} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
                      {TYPE[todaysWorkout.type].label} ·{" "}
                      {humanMinutes(todaysWorkout.estimatedMinutes)}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-[0.02em] text-bone">
                    {todaysWorkout.title}
                  </h2>
                </div>
                <IntensityBadge intensity={todaysWorkout.intensity} />
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-bone-muted">
                {todaysWorkout.goal}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-card bg-tan py-3 font-display text-base font-semibold uppercase tracking-stencil text-ink-950">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Start Session
              </div>
            </div>
          </Link>
        ) : (
          <div className="card p-6 text-center text-bone-muted">
            No session scheduled today.
          </div>
        )}
      </section>

      {/* week completion */}
      <section className="card p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="eyebrow">Week {week} Progress</span>
          <span className="font-mono text-sm text-bone">
            {wp.done}/{wp.total}
          </span>
        </div>
        <ProgressBar pct={wp.pct} />
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
          <span>Program total</span>
          <span className="text-bone-muted">
            {op.done}/{op.total} · {op.pct}%
          </span>
        </div>
      </section>

      {/* week schedule */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="eyebrow">This Week</span>
          <Link
            href="/calendar"
            className="font-mono text-[11px] uppercase tracking-widelabel text-tan"
          >
            Full program →
          </Link>
        </div>
        <WeekPicker value={week} onChange={setCurrentWeek} />
        <div className="mt-1 space-y-2">
          {weekWorkouts.map((w) => (
            <WorkoutRow
              key={w.id}
              workout={w}
              highlight={w.day === today && week === settings.currentWeek}
            />
          ))}
        </div>
      </section>

      {!hydrated && (
        <p className="pb-2 text-center font-mono text-[10px] uppercase tracking-widelabel text-bone-dim/60">
          Loading saved progress…
        </p>
      )}
    </div>
  );
}
