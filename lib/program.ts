import { program } from "./programData";
import type { Workout, WorkoutType } from "./types";

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export type DayName = (typeof DAYS)[number];

export const TOTAL_WEEKS = program.reduce((max, w) => Math.max(max, w.week), 0);

export const ALL_WORKOUTS = program;

export function getWorkout(id: string): Workout | undefined {
  return program.find((w) => w.id === id);
}

export function getWeekWorkouts(week: number): Workout[] {
  const byDay = new Map<string, Workout>();
  for (const w of program) {
    if (w.week === week) byDay.set(w.day, w);
  }
  // Return in Mon–Sun order, skipping any day that has no workout defined.
  return DAYS.map((d) => byDay.get(d)).filter((w): w is Workout => Boolean(w));
}

export function getWorkoutByWeekDay(week: number, day: string): Workout | undefined {
  return program.find((w) => w.week === week && w.day === day);
}

// Map a JS Date to a program day name (JS getDay: 0=Sun ... 6=Sat).
export function todayName(date: Date = new Date()): DayName {
  const jsToDay: DayName[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return jsToDay[date.getDay()];
}

export function estimatedSecondsForBlocks(w: Workout): number {
  if (!w.timerBlocks) return 0;
  return w.timerBlocks.reduce(
    (sum, b) => sum + (b.workSeconds + b.restSeconds) * b.rounds,
    0
  );
}

export const TYPE_LABEL: Record<WorkoutType, string> = {
  gym: "Gym",
  run: "Run",
  recovery: "Recovery",
  paintball: "Paintball",
};
