"use client";

import { useApp } from "@/app/providers";

function formatDone(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function CompleteButton({ workoutId }: { workoutId: string }) {
  const { isCompleted, completedAt, toggleCompleted } = useApp();
  const done = isCompleted(workoutId);

  return (
    <div>
      <button
        type="button"
        onClick={() => toggleCompleted(workoutId)}
        className={`btn h-16 w-full text-lg ${
          done
            ? "border border-signal-green/50 bg-signal-green/10 text-signal-green"
            : "bg-tan text-ink-950 shadow-glow"
        }`}
      >
        {done ? (
          <>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 6" />
            </svg>
            Completed
          </>
        ) : (
          "Mark Complete"
        )}
      </button>
      {done && (
        <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
          Logged {formatDone(completedAt(workoutId))} · tap to undo
        </p>
      )}
    </div>
  );
}
