"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TimerBlock } from "@/lib/types";
import { clock } from "@/lib/format";
import { useApp } from "@/app/providers";

type Phase = {
  kind: "work" | "rest";
  seconds: number;
  blockIndex: number;
  blockName: string;
  roundIndex: number; // 1-based within its block
  roundsInBlock: number;
};

function buildPhases(blocks: TimerBlock[]): Phase[] {
  const phases: Phase[] = [];
  blocks.forEach((b, blockIndex) => {
    for (let r = 1; r <= b.rounds; r++) {
      if (b.workSeconds > 0) {
        phases.push({
          kind: "work",
          seconds: b.workSeconds,
          blockIndex,
          blockName: b.name,
          roundIndex: r,
          roundsInBlock: b.rounds,
        });
      }
      if (b.restSeconds > 0) {
        phases.push({
          kind: "rest",
          seconds: b.restSeconds,
          blockIndex,
          blockName: b.name,
          roundIndex: r,
          roundsInBlock: b.rounds,
        });
      }
    }
  });
  // End on a work effort, not a trailing rest.
  if (phases.length && phases[phases.length - 1].kind === "rest") phases.pop();
  return phases;
}

const TICK_MS = 200;
const RING = 2 * Math.PI * 52; // circumference for r=52

export function IntervalTimer({ blocks }: { blocks: TimerBlock[] }) {
  const { settings, updateSettings } = useApp();
  const phases = useMemo(() => buildPhases(blocks), [blocks]);

  const [index, setIndex] = useState(0);
  const [remainingMs, setRemainingMs] = useState(
    phases.length ? phases[0].seconds * 1000 : 0
  );
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const deadlineRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  const totalPhases = phases.length;
  const current = phases[index];

  // ---- audio ----
  const ensureAudio = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (Ctor) audioRef.current = new Ctor();
    }
    if (audioRef.current?.state === "suspended") void audioRef.current.resume();
    return audioRef.current;
  }, []);

  const tone = useCallback(
    (freq: number, durationMs: number, delayMs = 0) => {
      if (!settingsRef.current.sound) return;
      const ctx = audioRef.current;
      if (!ctx) return;
      const start = ctx.currentTime + delayMs / 1000;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.22, start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + durationMs / 1000);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + durationMs / 1000 + 0.02);
    },
    []
  );

  const buzz = useCallback((pattern: number | number[]) => {
    if (!settingsRef.current.vibration) return;
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {
        /* unsupported */
      }
    }
  }, []);

  const cueFor = useCallback(
    (kind: "work" | "rest" | "finish") => {
      if (kind === "work") {
        tone(880, 150);
        buzz(120);
      } else if (kind === "rest") {
        tone(520, 150);
        buzz([50, 40, 50]);
      } else {
        tone(660, 130);
        tone(880, 130, 150);
        tone(1046, 220, 300);
        buzz([180, 70, 180]);
      }
    },
    [tone, buzz]
  );

  // ---- interval engine ----
  const stopInterval = useCallback(() => {
    if (intervalRef.current != null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const advance = useCallback(() => {
    setIndex((prev) => {
      const next = prev + 1;
      if (next >= totalPhases) {
        // finished
        stopInterval();
        deadlineRef.current = null;
        setRunning(false);
        setFinished(true);
        setRemainingMs(0);
        cueFor("finish");
        return prev;
      }
      const ms = phases[next].seconds * 1000;
      setRemainingMs(ms);
      deadlineRef.current = Date.now() + ms;
      cueFor(phases[next].kind);
      return next;
    });
  }, [phases, totalPhases, stopInterval, cueFor]);

  const tick = useCallback(() => {
    if (deadlineRef.current == null) return;
    const left = deadlineRef.current - Date.now();
    if (left <= 0) {
      advance();
    } else {
      setRemainingMs(left);
    }
  }, [advance]);

  const start = useCallback(() => {
    if (!totalPhases || running) return;
    ensureAudio();
    if (finished) {
      // restart from top
      setFinished(false);
      setIndex(0);
      const ms = phases[0].seconds * 1000;
      setRemainingMs(ms);
      deadlineRef.current = Date.now() + ms;
    } else {
      deadlineRef.current = Date.now() + remainingMs;
    }
    setRunning(true);
    stopInterval();
    intervalRef.current = window.setInterval(tick, TICK_MS);
  }, [totalPhases, running, finished, phases, remainingMs, ensureAudio, stopInterval, tick]);

  const pause = useCallback(() => {
    if (!running) return;
    if (deadlineRef.current != null) {
      setRemainingMs(Math.max(0, deadlineRef.current - Date.now()));
    }
    deadlineRef.current = null;
    setRunning(false);
    stopInterval();
  }, [running, stopInterval]);

  const skip = useCallback(() => {
    if (!totalPhases) return;
    ensureAudio();
    const next = index + 1;
    if (next >= totalPhases) {
      stopInterval();
      deadlineRef.current = null;
      setRunning(false);
      setFinished(true);
      setRemainingMs(0);
      return;
    }
    const ms = phases[next].seconds * 1000;
    setIndex(next);
    setRemainingMs(ms);
    setFinished(false);
    if (running) {
      deadlineRef.current = Date.now() + ms;
    } else {
      deadlineRef.current = null;
    }
    cueFor(phases[next].kind);
  }, [totalPhases, index, phases, running, ensureAudio, stopInterval, cueFor]);

  const reset = useCallback(() => {
    stopInterval();
    deadlineRef.current = null;
    setRunning(false);
    setFinished(false);
    setIndex(0);
    setRemainingMs(phases.length ? phases[0].seconds * 1000 : 0);
  }, [phases, stopInterval]);

  // Cleanup on unmount
  useEffect(() => () => stopInterval(), [stopInterval]);

  if (!totalPhases || !current) return null;

  const displaySeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const isWork = !finished && current.kind === "work";
  const isRest = !finished && current.kind === "rest";
  const phaseTotalMs = current.seconds * 1000;
  const elapsedFrac = finished
    ? 1
    : Math.min(1, Math.max(0, 1 - remainingMs / phaseTotalMs));

  const stateLabel = finished ? "Done" : isWork ? "Work" : "Rest";
  const stateColor = finished
    ? "text-tan"
    : isWork
      ? "text-signal-red"
      : "text-signal-green";
  const ringColor = finished
    ? "stroke-tan"
    : isWork
      ? "stroke-signal-red"
      : "stroke-signal-green";

  const roundPips = Array.from({ length: current.roundsInBlock }, (_, i) => i + 1);
  const nextPhase = index + 1 < totalPhases ? phases[index + 1] : null;

  return (
    <section className="card overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b border-ink-700 px-4 py-2.5">
        <span className="eyebrow">Interval Timer</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => updateSettings({ sound: !settings.sound })}
            aria-pressed={settings.sound}
            aria-label={settings.sound ? "Mute beeps" : "Enable beeps"}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
              settings.sound
                ? "border-tan/40 text-tan"
                : "border-ink-600 text-bone-dim"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              {settings.sound ? (
                <path d="M16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" />
              ) : (
                <path d="M22 9l-6 6M16 9l6 6" />
              )}
            </svg>
          </button>
          <button
            type="button"
            onClick={() => updateSettings({ vibration: !settings.vibration })}
            aria-pressed={settings.vibration}
            aria-label={settings.vibration ? "Disable vibration" : "Enable vibration"}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
              settings.vibration
                ? "border-tan/40 text-tan"
                : "border-ink-600 text-bone-dim"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="4" width="8" height="16" rx="1.5" />
              <path d="M4 9v6M20 9v6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ring + clock */}
      <div className="flex flex-col items-center px-4 pt-5">
        <div className="relative h-56 w-56">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="52"
              className="fill-none stroke-ink-750"
              strokeWidth="7"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              className={`fill-none ${ringColor} transition-[stroke-dashoffset] duration-200 ease-linear`}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={RING}
              strokeDashoffset={RING * (1 - elapsedFrac)}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={`stencil text-sm ${stateColor} ${running && isWork ? "animate-pulse-ring" : ""}`}
            >
              {stateLabel}
            </span>
            <span
              key={displaySeconds}
              className="tabular font-mono text-[56px] font-bold leading-none text-bone animate-tick-pop"
            >
              {clock(displaySeconds)}
            </span>
            <span className="mt-1 font-mono text-[11px] uppercase tracking-widelabel text-bone-dim">
              {finished ? "Session complete" : current.blockName}
            </span>
          </div>
        </div>

        {/* round pips */}
        {!finished && (
          <div className="mt-4 flex items-center gap-1.5">
            {roundPips.map((r) => (
              <span
                key={r}
                className={`h-2 w-2 rounded-full ${
                  r < current.roundIndex
                    ? "bg-bone/70"
                    : r === current.roundIndex
                      ? isWork
                        ? "bg-signal-red"
                        : "bg-signal-green"
                      : "bg-ink-600"
                }`}
              />
            ))}
            <span className="ml-2 font-mono text-[11px] text-bone-muted">
              Round {current.roundIndex}/{current.roundsInBlock}
            </span>
          </div>
        )}

        {/* next up */}
        <div className="mt-2 h-4 font-mono text-[11px] text-bone-dim">
          {nextPhase && !finished
            ? `Next: ${nextPhase.kind === "work" ? "Work" : "Rest"} · ${clock(nextPhase.seconds)}`
            : ""}
        </div>
      </div>

      {/* controls */}
      <div className="grid grid-cols-4 gap-2 p-4">
        <button
          type="button"
          onClick={reset}
          aria-label="Reset timer"
          className="btn h-14 border border-ink-600 bg-ink-800 text-bone-muted"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4" />
          </svg>
        </button>

        <button
          type="button"
          onClick={running ? pause : start}
          className={`btn col-span-2 h-14 text-lg ${
            running
              ? "bg-signal-yellow text-ink-950"
              : "bg-signal-red text-bone"
          }`}
        >
          {running ? (
            <>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
              {finished ? "Restart" : index === 0 && remainingMs === current.seconds * 1000 ? "Start" : "Resume"}
            </>
          )}
        </button>

        <button
          type="button"
          onClick={skip}
          aria-label="Skip to next interval"
          className="btn h-14 border border-ink-600 bg-ink-800 text-bone-muted"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 5l9 7-9 7zM18 5v14" />
          </svg>
        </button>
      </div>

      {/* phase progress bar */}
      <div className="px-4 pb-4">
        <div className="h-1 w-full overflow-hidden rounded-full bg-ink-750">
          <div
            className="h-full rounded-full bg-tan/70 transition-[width] duration-300"
            style={{ width: `${Math.round(((index + 1) / totalPhases) * 100)}%` }}
          />
        </div>
        <div className="mt-1.5 text-center font-mono text-[10px] uppercase tracking-widelabel text-bone-dim">
          Interval {Math.min(index + 1, totalPhases)} / {totalPhases}
        </div>
      </div>
    </section>
  );
}
