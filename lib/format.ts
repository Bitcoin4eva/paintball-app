import type { Units } from "./types";

// Convert any "<n> yd" mentions inside a line of program text to the chosen
// unit. Yards are the authored unit; when the user prefers meters we convert
// (1 yd = 0.9144 m) and round to the nearest whole meter. "100 yd" is treated
// as a stride distance and converted the same way.
export function applyUnits(text: string, units: Units): string {
  if (units === "yd") return text;
  return text.replace(/(\d+)\s?yd\b/g, (_match, n: string) => {
    const meters = Math.round(parseInt(n, 10) * 0.9144);
    return `${meters} m`;
  });
}

export const unitLabel = (units: Units) => (units === "yd" ? "yards" : "meters");

// mm:ss from a whole number of seconds.
export function clock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem.toString().padStart(2, "0")}`;
}

// Longer-form duration for estimates, e.g. "1h 12m" or "45m".
export function humanMinutes(mins: number): string {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}
