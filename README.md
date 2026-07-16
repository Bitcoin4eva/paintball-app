# Lean In — Paintball Performance

An 8-week, mobile-first training app built for one thing: making you faster, more
explosive, and harder to gas out on the field. Speed off the break, first three
steps, bunker-to-bunker transitions, hip mobility, and heart-rate control — not
generic gym fitness.

Built with **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS**.
All progress is saved locally on your device (no account, works offline after the
first load).

---

## Quick start

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open **http://localhost:3000** on your phone or in a mobile-sized browser window.

Production build:

```bash
npm run build
npm start
```

To install it like an app on your phone: open the dev/hosted URL in mobile Safari
or Chrome and choose **Add to Home Screen**. It runs full-screen and keeps your
data between sessions.

---

## How it works

- **Today** — the dashboard shows the session mapped to today's weekday inside your
  current program week, plus this week's full schedule and completion.
- **Program** — all 8 weeks at a glance; tap any week to see its days, tap a day to
  open it. Weeks 4 and 8 are benchmark-test weeks (marked ◆).
- **Session screen** — focus, an interval timer for conditioning blocks, a tappable
  checklist for every exercise, a notes field, and a Mark Complete button.
- **Progress** — overall %, per-week bars, and a breakdown by training type.
- **Settings** — yards/meters, timer beeps, vibration, heart-rate targets, current
  week, and a full data reset.

### The weekly template

| Day | Session |
| --- | --- |
| Mon | Gym — Lower Power + Acceleration |
| Tue | Run — Zone 2 Aerobic Control |
| Wed | Recovery / Hip Mobility |
| Thu | Gym — Upper Power + Reactive Speed |
| Fri | Run — Tempo / Threshold |
| Sat | Paintball — Practice or Match Simulation |
| Sun | Recovery |

### "Today" and program week

The app doesn't lock you to a start date. It reads **today's real weekday** and pairs
it with the **Current Program Week** you've selected (Dashboard week picker or
Settings). Change the week whenever you advance or repeat a block — your completed
sessions are keyed per session, so history is preserved.

### The interval timer

Sessions with conditioning intervals carry `timerBlocks`. The timer flattens them
into a work/rest sequence, floods the ring red on work and green on rest, tracks
rounds, and can beep (Web Audio) and vibrate on each change. Start / Pause / Skip /
Reset are all thumb-sized. Sound and vibration toggle live in the timer header or in
Settings.

---

## Editing the program

**All workout content lives in one file: [`lib/programData.ts`](lib/programData.ts).**
Nothing about the UI needs to change to edit training — just edit that array.

Each session is a `Workout`:

```ts
{
  id: "w1-mon",              // unique; convention is w<week>-<day>
  week: 1,
  day: "Monday",             // full weekday name
  title: "Lower Power + Acceleration",
  type: "gym",               // "gym" | "run" | "recovery" | "paintball"
  intensity: "hard",         // "easy" | "moderate" | "hard"  → green / yellow / red
  estimatedMinutes: 70,
  goal: "Build first-step drive and max intent off the line.",
  sections: [
    {
      title: "Warm-Up",
      items: ["Bike 5 min easy", "Leg swings x10/side", "..."],
    },
    // more sections...
  ],
  timerBlocks: [             // optional — omit for sessions with no timed intervals
    { name: "Sprints", workSeconds: 10, restSeconds: 50, rounds: 8 },
  ],
}
```

Notes:

- **Distances** written as `"10 yd"` are auto-converted to meters when the user picks
  Meters in Settings — so author everything in yards.
- **`timerBlocks`** with `restSeconds: 0` (e.g. a single tested effort or a hold) are
  handled — the timer just runs the work window with no rest phase.
- Add or remove weeks freely; the app derives the total week count from the data.

### Changing the look

Design tokens (the charcoal/tan/signal palette, fonts, radii, shadows) live in
[`tailwind.config.ts`](tailwind.config.ts). Global styles, the grain/vignette
background, and the reusable `.card` / `.btn` classes are in
[`app/globals.css`](app/globals.css).

### Heart-rate zones

Defaults (Zone 2 135–145, Tempo 150–165, recovery cap 130) live in
[`lib/storage.ts`](lib/storage.ts) as `DEFAULT_SETTINGS` and can be overridden per
device in Settings.

---

## Project structure

```
app/
  layout.tsx            Root layout, fonts, providers, bottom nav
  providers.tsx         App state + localStorage persistence (useApp hook)
  page.tsx              Dashboard / Today
  calendar/page.tsx     8-week program overview
  workout/[id]/page.tsx Session detail (timer, checklist, notes, complete)
  progress/page.tsx     Completion stats
  settings/page.tsx     Units, feedback, HR targets, reset
  globals.css           Tailwind layers, theme, background texture
components/
  IntervalTimer.tsx     The conditioning timer (work/rest, beeps, vibration)
  BottomNav.tsx         Thumb tab bar
  WorkoutRow.tsx        Tappable session row
  SectionChecklist.tsx  Checkable exercise items
  NotesField.tsx        Autosaving session notes
  CompleteButton.tsx    Mark-complete control
  WeekPicker.tsx        Week selector chips
  TypeGlyph.tsx         Per-type icons
  Bits.tsx              IntensityBadge, ProgressBar, CheckDot
lib/
  programData.ts        ← the 8-week program (edit here)
  program.ts            Lookups/selectors over the program
  types.ts              Shared types
  format.ts             Units, clock, duration helpers
  storage.ts            localStorage keys + defaults
  ui.ts                 Intensity/type style maps
```

## Data & privacy

Everything is stored in your browser's `localStorage` on the device you use — there's
no server and no account. Clearing site data (or **Reset All Progress** in Settings)
wipes it. Because it's per-device, progress won't sync across phone and laptop until
cloud accounts land (below).

## Roadmap

- Apple Health & Garmin sync
- Live heart-rate-zone logging during sessions
- Body-scan / composition tracking
- Tournament taper mode
- Exercise video demos
- Cloud account & multi-device sync

---

**Lean In.**
