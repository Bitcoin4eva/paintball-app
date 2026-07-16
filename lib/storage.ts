import type {
  ChecklistMap,
  CompletionMap,
  NotesMap,
  Settings,
} from "./types";

// Single namespace so a reset can wipe everything cleanly.
export const STORAGE_KEYS = {
  settings: "pb.settings",
  completed: "pb.completed",
  checklist: "pb.checklist",
  notes: "pb.notes",
} as const;

export const DEFAULT_SETTINGS: Settings = {
  currentWeek: 1,
  units: "yd",
  sound: true,
  vibration: true,
  maxHr: null,
  hr: {
    z2Low: 135,
    z2High: 145,
    tempoLow: 150,
    tempoHigh: 165,
    recoveryCeiling: 130,
  },
};

const canUseStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export function readJSON<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked (private mode) — fail silently; state stays in memory.
  }
}

export function clearAll(): void {
  if (!canUseStorage()) return;
  for (const key of Object.values(STORAGE_KEYS)) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  }
}

// Merge persisted settings over defaults so newly-added fields always exist.
export function loadSettings(): Settings {
  const stored = readJSON<Partial<Settings>>(STORAGE_KEYS.settings, {});
  return {
    ...DEFAULT_SETTINGS,
    ...stored,
    hr: { ...DEFAULT_SETTINGS.hr, ...(stored.hr ?? {}) },
  };
}

export const loadCompleted = () =>
  readJSON<CompletionMap>(STORAGE_KEYS.completed, {});
export const loadChecklist = () =>
  readJSON<ChecklistMap>(STORAGE_KEYS.checklist, {});
export const loadNotes = () => readJSON<NotesMap>(STORAGE_KEYS.notes, {});

// Stable key for an individual checklist item.
export const checkKey = (workoutId: string, section: number, item: number) =>
  `${workoutId}::${section}::${item}`;
