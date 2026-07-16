"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  ChecklistMap,
  CompletionMap,
  NotesMap,
  Settings,
  WeekProgress,
} from "@/lib/types";
import { ALL_WORKOUTS, getWeekWorkouts } from "@/lib/program";
import {
  DEFAULT_SETTINGS,
  STORAGE_KEYS,
  checkKey,
  clearAll,
  loadChecklist,
  loadCompleted,
  loadNotes,
  loadSettings,
  writeJSON,
} from "@/lib/storage";

type AppState = {
  hydrated: boolean;
  settings: Settings;
  updateSettings: (patch: Partial<Settings>) => void;
  setCurrentWeek: (week: number) => void;

  isCompleted: (id: string) => boolean;
  completedAt: (id: string) => string | null;
  toggleCompleted: (id: string) => void;
  setCompleted: (id: string, done: boolean) => void;

  isChecked: (id: string, section: number, item: number) => boolean;
  toggleChecked: (id: string, section: number, item: number) => void;
  clearChecksFor: (id: string) => void;

  getNote: (id: string) => string;
  setNote: (id: string, text: string) => void;

  weekProgress: (week: number) => WeekProgress;
  overallProgress: () => WeekProgress;

  resetAll: () => void;
};

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [completed, setCompletedMap] = useState<CompletionMap>({});
  const [checklist, setChecklistMap] = useState<ChecklistMap>({});
  const [notes, setNotesMap] = useState<NotesMap>({});

  // Load persisted state once, after mount, to avoid SSR hydration mismatches.
  useEffect(() => {
    setSettings(loadSettings());
    setCompletedMap(loadCompleted());
    setChecklistMap(loadChecklist());
    setNotesMap(loadNotes());
    setHydrated(true);
  }, []);

  // Persist each slice when it changes (only after hydration).
  useEffect(() => {
    if (hydrated) writeJSON(STORAGE_KEYS.settings, settings);
  }, [settings, hydrated]);
  useEffect(() => {
    if (hydrated) writeJSON(STORAGE_KEYS.completed, completed);
  }, [completed, hydrated]);
  useEffect(() => {
    if (hydrated) writeJSON(STORAGE_KEYS.checklist, checklist);
  }, [checklist, hydrated]);
  useEffect(() => {
    if (hydrated) writeJSON(STORAGE_KEYS.notes, notes);
  }, [notes, hydrated]);

  // Debounce timer bucket for note writes handled by React state directly;
  // (state updates are cheap, persistence effect coalesces on re-render).
  const notesTimer = useRef<Record<string, number>>({});
  useEffect(() => {
    const timers = notesTimer.current;
    return () => {
      Object.values(timers).forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setSettings((s) => ({
      ...s,
      ...patch,
      hr: patch.hr ? { ...s.hr, ...patch.hr } : s.hr,
    }));
  }, []);

  const setCurrentWeek = useCallback((week: number) => {
    setSettings((s) => ({ ...s, currentWeek: week }));
  }, []);

  const isCompleted = useCallback(
    (id: string) => Boolean(completed[id]),
    [completed]
  );
  const completedAt = useCallback(
    (id: string) => completed[id] ?? null,
    [completed]
  );

  const setCompleted = useCallback((id: string, done: boolean) => {
    setCompletedMap((m) => {
      const next = { ...m };
      if (done) next[id] = new Date().toISOString();
      else delete next[id];
      return next;
    });
  }, []);

  const toggleCompleted = useCallback((id: string) => {
    setCompletedMap((m) => {
      const next = { ...m };
      if (next[id]) delete next[id];
      else next[id] = new Date().toISOString();
      return next;
    });
  }, []);

  const isChecked = useCallback(
    (id: string, section: number, item: number) =>
      Boolean(checklist[checkKey(id, section, item)]),
    [checklist]
  );

  const toggleChecked = useCallback(
    (id: string, section: number, item: number) => {
      const key = checkKey(id, section, item);
      setChecklistMap((m) => ({ ...m, [key]: !m[key] }));
    },
    []
  );

  const clearChecksFor = useCallback((id: string) => {
    setChecklistMap((m) => {
      const next: ChecklistMap = {};
      for (const [k, v] of Object.entries(m)) {
        if (!k.startsWith(`${id}::`)) next[k] = v;
      }
      return next;
    });
  }, []);

  const getNote = useCallback((id: string) => notes[id] ?? "", [notes]);
  const setNote = useCallback((id: string, text: string) => {
    setNotesMap((m) => ({ ...m, [id]: text }));
  }, []);

  const weekProgress = useCallback(
    (week: number): WeekProgress => {
      const workouts = getWeekWorkouts(week);
      const total = workouts.length;
      const done = workouts.filter((w) => Boolean(completed[w.id])).length;
      return { week, done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    [completed]
  );

  const overallProgress = useCallback((): WeekProgress => {
    const total = ALL_WORKOUTS.length;
    const done = ALL_WORKOUTS.filter((w) => Boolean(completed[w.id])).length;
    return { week: 0, done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }, [completed]);

  const resetAll = useCallback(() => {
    clearAll();
    setSettings(DEFAULT_SETTINGS);
    setCompletedMap({});
    setChecklistMap({});
    setNotesMap({});
  }, []);

  const value = useMemo<AppState>(
    () => ({
      hydrated,
      settings,
      updateSettings,
      setCurrentWeek,
      isCompleted,
      completedAt,
      toggleCompleted,
      setCompleted,
      isChecked,
      toggleChecked,
      clearChecksFor,
      getNote,
      setNote,
      weekProgress,
      overallProgress,
      resetAll,
    }),
    [
      hydrated,
      settings,
      updateSettings,
      setCurrentWeek,
      isCompleted,
      completedAt,
      toggleCompleted,
      setCompleted,
      isChecked,
      toggleChecked,
      clearChecksFor,
      getNote,
      setNote,
      weekProgress,
      overallProgress,
      resetAll,
    ]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppStateProvider");
  return ctx;
}
