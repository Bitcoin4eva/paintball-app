"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "@/app/providers";

export function NotesField({ workoutId }: { workoutId: string }) {
  const { getNote, setNote, hydrated } = useApp();
  const [value, setValue] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);
  const flashTimer = useRef<number | null>(null);

  // Load stored note once hydrated / when workout changes.
  useEffect(() => {
    if (hydrated) setValue(getNote(workoutId));
  }, [hydrated, workoutId, getNote]);

  const onChange = (v: string) => {
    setValue(v);
    setNote(workoutId, v);
    setSavedFlash(true);
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setSavedFlash(false), 1200);
  };

  useEffect(
    () => () => {
      if (flashTimer.current) window.clearTimeout(flashTimer.current);
    },
    []
  );

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-ink-700 bg-ink-850/60 px-4 py-2.5">
        <h3 className="stencil text-[13px] text-tan">Session Notes</h3>
        <span
          className={`font-mono text-[10px] uppercase tracking-widelabel transition-opacity ${
            savedFlash ? "text-signal-green opacity-100" : "opacity-0"
          }`}
        >
          Saved
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Log loads, sprint times, HR recovery, how the legs felt, benchmark numbers…"
        className="w-full resize-y bg-transparent px-4 py-3 text-[14px] leading-relaxed text-bone placeholder:text-bone-dim/70 focus:outline-none"
      />
    </div>
  );
}
