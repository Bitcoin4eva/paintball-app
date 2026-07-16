"use client";

import { useState } from "react";
import { useApp } from "../providers";
import {
  ALL_WORKOUTS,
  getWeekWorkouts,
  TOTAL_WEEKS,
} from "@/lib/program";
import { INTENSITY, TYPE } from "@/lib/ui";
import { WorkoutRow } from "@/components/WorkoutRow";

function WeekCell({
  week,
  active,
  onSelect,
}: {
  week: number;
  active: boolean;
  onSelect: (w: number) => void;
}) {
  const { isCompleted } = useApp();
  const workouts = getWeekWorkouts(week);
  const done = workouts.filter((w) => isCompleted(w.id)).length;
  const isBenchmark = week === 4 || week === 8;

  return (
    <button
      type="button"
      onClick={() => onSelect(week)}
      aria-pressed={active}
      className={`card flex flex-col gap-2 p-3 text-left transition-colors ${
        active ? "ring-1 ring-tan bg-ink-800" : "active:bg-ink-800"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-display text-lg font-bold uppercase tracking-stencil text-bone">
          W{week}
        </span>
        <span className="font-mono text-[10px] text-bone-dim">
          {done}/{workouts.length}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {workouts.map((w) => {
          const c = isCompleted(w.id);
          return (
            <span
              key={w.id}
              className={`h-1.5 flex-1 rounded-full ${
                c ? INTENSITY[w.intensity].bar : "bg-ink-600"
              }`}
              title={`${w.day}: ${w.title}`}
            />
          );
        })}
      </div>
      {isBenchmark && (
        <span className="font-mono text-[9px] uppercase tracking-widelabel text-tan">
          ◆ Benchmark
        </span>
      )}
    </button>
  );
}

export default function CalendarPage() {
  const { settings, setCurrentWeek } = useApp();
  const [selected, setSelected] = useState(settings.currentWeek);
  const weekWorkouts = getWeekWorkouts(selected);

  const select = (w: number) => {
    setSelected(w);
    setCurrentWeek(w); // keep dashboard in sync with what the athlete is viewing
  };

  const weeks = Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <header className="pt-1">
        <h1 className="font-display text-2xl font-bold uppercase tracking-stencil text-bone">
          Program
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-widelabel text-tan">
          8 Weeks · {ALL_WORKOUTS.length} Sessions
        </p>
      </header>

      <section>
        <span className="eyebrow">Overview</span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {weeks.map((w) => (
            <WeekCell
              key={w}
              week={w}
              active={w === selected}
              onSelect={select}
            />
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Week {selected} Sessions</span>
          <span className="font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
            {weekWorkouts.length} days
          </span>
        </div>
        <div className="space-y-2">
          {weekWorkouts.map((w) => (
            <WorkoutRow key={w.id} workout={w} />
          ))}
        </div>
      </section>
    </div>
  );
}
