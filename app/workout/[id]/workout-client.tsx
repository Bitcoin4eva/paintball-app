"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useApp } from "../../providers";
import { getWorkout } from "@/lib/program";
import { INTENSITY, TYPE, DAY_ABBR } from "@/lib/ui";
import { humanMinutes } from "@/lib/format";
import { TypeGlyph } from "@/components/TypeGlyph";
import { IntensityBadge } from "@/components/Bits";
import { IntervalTimer } from "@/components/IntervalTimer";
import { SectionChecklist } from "@/components/SectionChecklist";
import { NotesField } from "@/components/NotesField";
import { CompleteButton } from "@/components/CompleteButton";

function HrReference() {
  const { settings } = useApp();
  const { hr } = settings;
  return (
    <div className="card p-4">
      <span className="eyebrow">Heart-Rate Targets</span>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-card bg-ink-850 py-2">
          <div className="font-mono text-[10px] uppercase tracking-widelabel text-signal-green">
            Zone 2
          </div>
          <div className="font-mono text-sm text-bone">
            {hr.z2Low}–{hr.z2High}
          </div>
        </div>
        <div className="rounded-card bg-ink-850 py-2">
          <div className="font-mono text-[10px] uppercase tracking-widelabel text-signal-yellow">
            Tempo
          </div>
          <div className="font-mono text-sm text-bone">
            {hr.tempoLow}–{hr.tempoHigh}
          </div>
        </div>
        <div className="rounded-card bg-ink-850 py-2">
          <div className="font-mono text-[10px] uppercase tracking-widelabel text-bone-dim">
            Rec. Cap
          </div>
          <div className="font-mono text-sm text-bone">{hr.recoveryCeiling}</div>
        </div>
      </div>
    </div>
  );
}

export default function WorkoutPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const workout = id ? getWorkout(id) : undefined;

  if (!workout) {
    return (
      <div className="space-y-4 pt-10 text-center">
        <p className="font-display text-xl uppercase tracking-stencil text-bone">
          Session not found
        </p>
        <Link
          href="/"
          className="btn mx-auto inline-flex bg-tan px-5 py-2.5 text-ink-950"
        >
          Back to Today
        </Link>
      </div>
    );
  }

  const t = TYPE[workout.type];
  const showHr = workout.type === "run" || workout.type === "recovery";
  const hasTimer = !!workout.timerBlocks && workout.timerBlocks.length > 0;

  return (
    <div className="space-y-5">
      {/* back */}
      <Link
        href="/calendar"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widelabel text-bone-dim active:text-bone"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Program
      </Link>

      {/* header */}
      <header>
        <div className="mb-2 flex items-center gap-2">
          <span className={t.accent}>
            <TypeGlyph type={workout.type} className="h-5 w-5" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
            Week {workout.week} · {DAY_ABBR[workout.day] ?? workout.day} ·{" "}
            {t.label}
          </span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-display text-[26px] font-bold uppercase leading-tight tracking-[0.02em] text-bone">
            {workout.title}
          </h1>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <IntensityBadge intensity={workout.intensity} />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-850 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widelabel text-bone-muted">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {humanMinutes(workout.estimatedMinutes)}
          </span>
        </div>
      </header>

      {/* goal */}
      <div className={`card border-l-4 p-4 ${t.edge}`}>
        <span className="eyebrow">Focus</span>
        <p className="mt-1.5 text-[14px] leading-relaxed text-bone-muted">
          {workout.goal}
        </p>
      </div>

      {showHr && <HrReference />}

      {/* timer */}
      {hasTimer && <IntervalTimer blocks={workout.timerBlocks!} />}

      {/* checklist */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="eyebrow">Session Breakdown</span>
        </div>
        <SectionChecklist workout={workout} />
      </div>

      {/* notes */}
      <NotesField workoutId={workout.id} />

      {/* complete */}
      <div className="pt-1">
        <CompleteButton workoutId={workout.id} />
      </div>
    </div>
  );
}
