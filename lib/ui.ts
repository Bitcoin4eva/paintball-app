import type { Intensity, WorkoutType } from "./types";

// Intensity is the loud signal in the UI (green / yellow / red).
export const INTENSITY: Record<
  Intensity,
  { label: string; text: string; dot: string; chip: string; bar: string }
> = {
  easy: {
    label: "Easy",
    text: "text-signal-green",
    dot: "bg-signal-green",
    chip: "border-signal-green/40 bg-signal-green/10 text-signal-green",
    bar: "bg-signal-green",
  },
  moderate: {
    label: "Moderate",
    text: "text-signal-yellow",
    dot: "bg-signal-yellow",
    chip: "border-signal-yellow/40 bg-signal-yellow/10 text-signal-yellow",
    bar: "bg-signal-yellow",
  },
  hard: {
    label: "Hard",
    text: "text-signal-red",
    dot: "bg-signal-red",
    chip: "border-signal-red/40 bg-signal-red/10 text-signal-red",
    bar: "bg-signal-red",
  },
};

// Type carries a quieter accent used for the glyph and calendar edge.
export const TYPE: Record<
  WorkoutType,
  { label: string; short: string; accent: string; edge: string; softText: string }
> = {
  gym: {
    label: "Gym",
    short: "GYM",
    accent: "text-tan",
    edge: "border-l-tan",
    softText: "text-tan",
  },
  run: {
    label: "Run",
    short: "RUN",
    accent: "text-bone",
    edge: "border-l-bone/60",
    softText: "text-bone",
  },
  recovery: {
    label: "Recovery",
    short: "REC",
    accent: "text-signal-green",
    edge: "border-l-signal-green/60",
    softText: "text-signal-green",
  },
  paintball: {
    label: "Paintball",
    short: "PB",
    accent: "text-signal-red",
    edge: "border-l-signal-red/70",
    softText: "text-signal-red",
  },
};

export const DAY_ABBR: Record<string, string> = {
  Monday: "MON",
  Tuesday: "TUE",
  Wednesday: "WED",
  Thursday: "THU",
  Friday: "FRI",
  Saturday: "SAT",
  Sunday: "SUN",
};
