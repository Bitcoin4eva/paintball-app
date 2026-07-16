// ---------------------------------------------------------------------------
// Core program types
// The Workout shape below matches the structure the program was authored in.
// Edit workout content in lib/programData.ts — not here.
// ---------------------------------------------------------------------------

export type WorkoutType = "gym" | "run" | "recovery" | "paintball";
export type Intensity = "easy" | "moderate" | "hard";

export type WorkoutSection = {
  title: string;
  items: string[];
};

export type TimerBlock = {
  name: string;
  workSeconds: number;
  restSeconds: number;
  rounds: number;
};

export type Workout = {
  id: string;
  week: number;
  day: string;
  title: string;
  type: WorkoutType;
  intensity: Intensity;
  estimatedMinutes: number;
  goal: string;
  sections: WorkoutSection[];
  timerBlocks?: TimerBlock[];
};

// ---------------------------------------------------------------------------
// App / persistence types
// ---------------------------------------------------------------------------

export type Units = "yd" | "m";

export type HrTargets = {
  z2Low: number;
  z2High: number;
  tempoLow: number;
  tempoHigh: number;
  recoveryCeiling: number;
};

export type Settings = {
  currentWeek: number;
  units: Units;
  sound: boolean;
  vibration: boolean;
  maxHr: number | null;
  hr: HrTargets;
};

// workoutId -> ISO timestamp string when marked complete
export type CompletionMap = Record<string, string>;

// `${workoutId}::${sectionIndex}::${itemIndex}` -> checked
export type ChecklistMap = Record<string, boolean>;

// workoutId -> free-text note
export type NotesMap = Record<string, string>;

export type WeekProgress = {
  week: number;
  done: number;
  total: number;
  pct: number;
};
