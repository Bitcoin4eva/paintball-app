import type { Workout } from "./types";

// ===========================================================================
// 8-WEEK PAINTBALL PERFORMANCE PROGRAM
// ---------------------------------------------------------------------------
// Weekly template:
//   Mon  Gym — Lower Power + Acceleration
//   Tue  Run — Zone 2 Aerobic Control
//   Wed  Recovery / Hip Mobility
//   Thu  Gym — Upper Power + Reactive Speed
//   Fri  Run — Tempo / Threshold
//   Sat  Paintball Practice or Match Simulation
//   Sun  Recovery / Optional Light Walk
//
// To edit: change any string below. To add a workout, copy an object and give
// it a unique `id`. To retune a timer, edit its `timerBlocks`. Nothing else in
// the app hardcodes workout content — it all reads from this array.
// ===========================================================================

export const program: Workout[] = [
  // ========================= WEEK 1 =========================
  {
    id: "w1-mon",
    week: 1,
    day: "Monday",
    title: "Lower Power + Acceleration",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 70,
    goal: "Build first-step explosion and lower-body power.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 4x3, rest 60 sec", "Lateral bound 3x4/side, rest 45 sec"],
      },
      {
        title: "Acceleration",
        items: [
          "6x10 yd sprint, rest 45 sec",
          "4x20 yd sprint, rest 60 sec",
          "4x10 yd kneeling start sprint, rest 45 sec",
        ],
      },
      {
        title: "Strength",
        items: [
          "Hang clean 5x3 @ RPE 7, rest 2 min",
          "Bulgarian split squat 3x8/leg, rest 60 sec",
          "Heavy sled push 5x20 yd, rest 60 sec",
        ],
      },
      {
        title: "Core",
        items: ["Pallof press 3x12/side", "Hollow hold 3x30 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "10 yd sprint", workSeconds: 10, restSeconds: 45, rounds: 6 },
      { name: "20 yd sprint", workSeconds: 15, restSeconds: 60, rounds: 4 },
      { name: "Kneeling start", workSeconds: 10, restSeconds: 45, rounds: 4 },
    ],
  },
  {
    id: "w1-tue",
    week: 1,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Lower heart rate while running and build aerobic efficiency.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "35 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "If HR goes over 145, walk until HR drops below 135",
          "5 min walk cooldown",
        ],
      },
      {
        title: "Mobility",
        items: [
          "Hip flexor stretch 1 min/side",
          "Hamstring floss x12/side",
          "Calf stretch 1 min/side",
          "Thoracic rotations x10/side",
        ],
      },
    ],
  },
  {
    id: "w1-wed",
    week: 1,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Recover, reduce stiffness, and improve bunker position mobility.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w1-thu",
    week: 1,
    day: "Thursday",
    title: "Upper Power + Reactive Speed",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 70,
    goal: "Improve upper-body power, posture, rotation, and reactive sprint ability.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 4x5, rest 45 sec", "Med ball rotational throw 4x5/side, rest 45 sec"],
      },
      {
        title: "Reactive Speed",
        items: ["8x10 yd reactive sprint, rest 45 sec", "6x20 yd lateral shuffle to sprint, rest 60 sec"],
      },
      {
        title: "Strength",
        items: [
          "Pullups or assisted pullups 4x6–8",
          "Landmine press 4x8/side",
          "Seated cable row 3x12",
          "Face pulls 3x15",
        ],
      },
      {
        title: "Carry + Core",
        items: ["Farmer carry 4x40 yd", "Bear crawl 3x20 yd", "Suitcase carry 3x30 yd/side"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 45, rounds: 8 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 60, rounds: 6 },
    ],
  },
  {
    id: "w1-fri",
    week: 1,
    day: "Friday",
    title: "Tempo Run + Strides",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 50,
    goal: "Build endurance without crushing weekend paintball performance.",
    sections: [
      {
        title: "Run",
        items: [
          "1 mile easy warmup",
          "3x5 min tempo effort, rest 2 min easy jog between",
          "Tempo HR target: 150–165 bpm",
          "4x100 yd relaxed strides, walk back recovery",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [
      { name: "Tempo interval", workSeconds: 300, restSeconds: 120, rounds: 3 },
      { name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w1-sat",
    week: 1,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Use practice as high-intensity sport conditioning.",
    sections: [
      {
        title: "If Playing Paintball",
        items: [
          "Count this as your hard conditioning day",
          "Focus on explosive first 3 steps every point",
          "Between points, breathe nasal if possible and track HR recovery",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "25 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
          "Rest 30 sec when needed",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 12 }],
  },
  {
    id: "w1-sun",
    week: 1,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover from weekend play and prepare for Monday power.",
    sections: [
      {
        title: "Recovery",
        items: ["Off completely OR 20–30 min easy walk", "HR under 125 bpm", "No hard conditioning"],
      },
      {
        title: "Mobility",
        items: [
          "Couch stretch 1 min/side",
          "Pigeon stretch 1 min/side",
          "Ankle rocks x15/side",
          "Foam roll calves, quads, glutes 5–8 min",
        ],
      },
    ],
  },

  // ========================= WEEK 2 =========================
  {
    id: "w2-mon",
    week: 2,
    day: "Monday",
    title: "Lower Power + Acceleration",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 70,
    goal: "Repeat Week 1 with cleaner mechanics and slightly more speed.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 4x3", "Lateral bound 3x5/side"],
      },
      {
        title: "Acceleration",
        items: [
          "7x10 yd sprint, rest 45 sec",
          "5x20 yd sprint, rest 60 sec",
          "4x10 yd kneeling start sprint, rest 45 sec",
        ],
      },
      {
        title: "Strength",
        items: ["Hang clean 5x3 @ RPE 7", "Bulgarian split squat 3x8/leg", "Heavy sled push 6x20 yd"],
      },
      {
        title: "Core + Mobility",
        items: [
          "Pallof press 3x12/side",
          "Hollow hold 3x30 sec",
          "Deep squat hold 2x60 sec",
          "90/90 hip switches x10/side",
        ],
      },
    ],
    timerBlocks: [
      { name: "10 yd sprint", workSeconds: 10, restSeconds: 45, rounds: 7 },
      { name: "20 yd sprint", workSeconds: 15, restSeconds: 60, rounds: 5 },
      { name: "Kneeling start", workSeconds: 10, restSeconds: 45, rounds: 4 },
    ],
  },
  {
    id: "w2-tue",
    week: 2,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 60,
    goal: "Extend Zone 2 time while keeping HR controlled.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "40 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w2-wed",
    week: 2,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Keep joints moving without adding fatigue.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Adductor rockbacks 2x12/side",
          "Couch stretch 2x60 sec/side",
        ],
      },
    ],
  },
  {
    id: "w2-thu",
    week: 2,
    day: "Thursday",
    title: "Upper Power + Reactive Speed",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 70,
    goal: "Improve reactive first step and upper-body power.",
    sections: [
      {
        title: "Power",
        items: ["Med ball chest pass 4x5", "Med ball rotational throw 4x5/side"],
      },
      {
        title: "Reactive Speed",
        items: ["9x10 yd reactive sprint, rest 45 sec", "6x20 yd lateral shuffle to sprint, rest 60 sec"],
      },
      {
        title: "Strength",
        items: [
          "Pullups or assisted pullups 4x6–8",
          "Landmine press 4x8/side",
          "Seated cable row 3x12",
          "Face pulls 3x15",
          "Farmer carry 4x40 yd",
        ],
      },
      {
        title: "Core",
        items: ["Bear crawl 3x20 yd", "Suitcase carry 3x30 yd/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 45, rounds: 9 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 60, rounds: 6 },
    ],
  },
  {
    id: "w2-fri",
    week: 2,
    day: "Friday",
    title: "Tempo Run + Strides",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Build tempo tolerance and relaxed speed.",
    sections: [
      {
        title: "Run",
        items: ["1 mile easy warmup", "3x6 min tempo, rest 2 min jog", "4x100 yd relaxed strides", "5 min cooldown"],
      },
    ],
    timerBlocks: [
      { name: "Tempo interval", workSeconds: 360, restSeconds: 120, rounds: 3 },
      { name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w2-sat",
    week: 2,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Sport-specific conditioning.",
    sections: [
      {
        title: "If Playing",
        items: ["Use practice as hard conditioning", "Track HR recovery between points"],
      },
      {
        title: "If Not Playing",
        items: [
          "25 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 13 }],
  },
  {
    id: "w2-sun",
    week: 2,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover fully.",
    sections: [
      {
        title: "Recovery",
        items: ["Off or 20–30 min walk", "HR under 125 bpm", "Foam roll 5–8 min"],
      },
    ],
  },

  // ========================= WEEK 3 =========================
  // Progression: build sprint volume, sled to 6 rounds, extend reactive work.
  {
    id: "w3-mon",
    week: 3,
    day: "Monday",
    title: "Lower Power + Acceleration",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 72,
    goal: "Push sprint volume while keeping the sled heavy and jumps crisp.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 4x3, rest 60 sec", "Lateral bound 3x5/side, rest 45 sec"],
      },
      {
        title: "Acceleration",
        items: [
          "8x10 yd sprint, rest 45 sec",
          "5x20 yd sprint, rest 60 sec",
          "5x10 yd kneeling start sprint, rest 45 sec",
        ],
      },
      {
        title: "Strength",
        items: [
          "Hang clean 5x3 @ RPE 7–8, rest 2 min",
          "Bulgarian split squat 3x8/leg, rest 60 sec",
          "Heavy sled push 6x20 yd, rest 60 sec",
        ],
      },
      {
        title: "Core",
        items: ["Pallof press 3x12/side", "Hollow hold 3x35 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "10 yd sprint", workSeconds: 10, restSeconds: 45, rounds: 8 },
      { name: "20 yd sprint", workSeconds: 15, restSeconds: 60, rounds: 5 },
      { name: "Kneeling start", workSeconds: 10, restSeconds: 45, rounds: 5 },
    ],
  },
  {
    id: "w3-tue",
    week: 3,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Hold controlled aerobic effort and keep HR in the window.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "45 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145, resume when below 135",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w3-wed",
    week: 3,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Flush the legs and keep hips open for bunker positions.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w3-thu",
    week: 3,
    day: "Thursday",
    title: "Upper Power + Reactive Speed",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 72,
    goal: "Sharpen the reactive first step and add pulling volume.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 4x5, rest 45 sec", "Med ball rotational throw 4x5/side, rest 45 sec"],
      },
      {
        title: "Reactive Speed",
        items: ["10x10 yd reactive sprint, rest 45 sec", "7x20 yd lateral shuffle to sprint, rest 60 sec"],
      },
      {
        title: "Strength",
        items: [
          "Pullups or assisted pullups 4x6–8",
          "Landmine press 4x8/side",
          "Seated cable row 3x12",
          "Face pulls 3x15",
        ],
      },
      {
        title: "Carry + Core",
        items: ["Farmer carry 4x40 yd", "Bear crawl 3x20 yd", "Suitcase carry 3x30 yd/side"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 45, rounds: 10 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 60, rounds: 7 },
    ],
  },
  {
    id: "w3-fri",
    week: 3,
    day: "Friday",
    title: "Tempo Run + Strides",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Extend tempo volume without frying the legs for Saturday.",
    sections: [
      {
        title: "Run",
        items: [
          "1 mile easy warmup",
          "4x5 min tempo effort, rest 2 min easy jog between",
          "Tempo HR target: 150–165 bpm",
          "4x100 yd relaxed strides, walk back recovery",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [
      { name: "Tempo interval", workSeconds: 300, restSeconds: 120, rounds: 4 },
      { name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w3-sat",
    week: 3,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Sport-specific conditioning — attack every first step.",
    sections: [
      {
        title: "If Playing",
        items: [
          "Use practice as your hard conditioning day",
          "Explosive first 3 steps out of every bunker",
          "Track HR recovery between points, breathe nasal when possible",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "27 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
          "Rest 30 sec when needed",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 14 }],
  },
  {
    id: "w3-sun",
    week: 3,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover from weekend play and reset for Monday power.",
    sections: [
      {
        title: "Recovery",
        items: ["Off completely OR 20–30 min easy walk", "HR under 125 bpm", "No hard conditioning"],
      },
      {
        title: "Mobility",
        items: [
          "Couch stretch 1 min/side",
          "Pigeon stretch 1 min/side",
          "Ankle rocks x15/side",
          "Foam roll calves, quads, glutes 5–8 min",
        ],
      },
    ],
  },

  // ========================= WEEK 4 =========================
  // Benchmark / deload week: test, then keep speed sharp on lighter volume.
  {
    id: "w4-mon",
    week: 4,
    day: "Monday",
    title: "Benchmark — Test Day",
    type: "gym",
    intensity: "moderate",
    estimatedMinutes: 60,
    goal: "Establish baseline numbers: 10 yd sprint, broad jump, HR recovery.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
          "3x build-up sprints to ~80% (ramp in, not max)",
        ],
      },
      {
        title: "Benchmark Tests",
        items: [
          "10 yd sprint: 3 attempts, full rest (2–3 min), log your fastest",
          "Broad jump: 3 attempts, full rest, log your best distance",
          "200 yd hard run, then measure HR recovery: record HR immediately, then again at 60 sec — log the drop",
          "Write all numbers in Notes below — you'll retest in Week 8",
        ],
      },
      {
        title: "Light Strength",
        items: ["Bulgarian split squat 2x8/leg, rest 60 sec", "Sled push 3x20 yd moderate, rest 60 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "10 yd test attempt", workSeconds: 10, restSeconds: 150, rounds: 3 },
      { name: "HR recovery window", workSeconds: 60, restSeconds: 0, rounds: 1 },
    ],
  },
  {
    id: "w4-tue",
    week: 4,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 50,
    goal: "Easy aerobic maintenance during the deload — nothing heroic.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "40 min Zone 2 run only",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w4-wed",
    week: 4,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Absorb the training — move easy and open the hips.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w4-thu",
    week: 4,
    day: "Thursday",
    title: "Upper Power + Reactive Speed",
    type: "gym",
    intensity: "moderate",
    estimatedMinutes: 60,
    goal: "Reduced volume, speed stays sharp — quality reps only.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 3x5, rest 45 sec", "Med ball rotational throw 3x5/side, rest 45 sec"],
      },
      {
        title: "Reactive Speed",
        items: ["6x10 yd reactive sprint, rest 45 sec", "4x20 yd lateral shuffle to sprint, rest 60 sec"],
      },
      {
        title: "Strength",
        items: ["Pullups or assisted pullups 3x6–8", "Landmine press 3x8/side", "Face pulls 3x15"],
      },
      {
        title: "Carry",
        items: ["Farmer carry 3x40 yd"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 45, rounds: 6 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w4-fri",
    week: 4,
    day: "Friday",
    title: "Steady Tempo — 2 Mile",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 50,
    goal: "One continuous steady effort to gauge sustainable pace.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min easy jog/walk warmup",
          "2 mile steady tempo, continuous",
          "Tempo HR target: 150–160 bpm — steady, not surging",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
  },
  {
    id: "w4-sat",
    week: 4,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Play freely — deload week, let the sport be the conditioning.",
    sections: [
      {
        title: "If Playing",
        items: [
          "Use practice as your conditioning",
          "Focus on clean movement and first-step timing, not grinding",
          "Track HR recovery between points",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "25 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 13 }],
  },
  {
    id: "w4-sun",
    week: 4,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Close the deload — recover fully before the intensity block.",
    sections: [
      {
        title: "Recovery",
        items: ["Off or 20–30 min walk", "HR under 125 bpm", "Foam roll 5–8 min"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Pigeon stretch 1 min/side", "Ankle rocks x15/side"],
      },
    ],
  },

  // ========================= WEEK 5 =========================
  // Intensity up, rest down. Shorter rests, heavier throws, hang clean 6x2.
  {
    id: "w5-mon",
    week: 5,
    day: "Monday",
    title: "Lower Power + Acceleration",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 72,
    goal: "Compress rest to build speed-endurance and repeat-sprint ability.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 4x3, rest 60 sec", "Lateral bound 4x4/side, rest 45 sec"],
      },
      {
        title: "Acceleration",
        items: [
          "8x10 yd sprint, rest 35 sec",
          "6x20 yd sprint, rest 50 sec",
          "4x10 yd kneeling start sprint, rest 45 sec",
        ],
      },
      {
        title: "Strength",
        items: [
          "Hang clean 6x2 @ RPE 8, rest 2 min",
          "Bulgarian split squat 3x8/leg, rest 60 sec",
          "Heavy sled push 6x20 yd, rest 60 sec",
        ],
      },
      {
        title: "Core",
        items: ["Pallof press 3x12/side", "Hollow hold 3x40 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "10 yd sprint", workSeconds: 10, restSeconds: 35, rounds: 8 },
      { name: "20 yd sprint", workSeconds: 15, restSeconds: 50, rounds: 6 },
      { name: "Kneeling start", workSeconds: 10, restSeconds: 45, rounds: 4 },
    ],
  },
  {
    id: "w5-tue",
    week: 5,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 65,
    goal: "Longest aerobic session — build the engine, hold the window.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "50 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w5-wed",
    week: 5,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Manage fatigue from the intensity jump — move easy.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w5-thu",
    week: 5,
    day: "Thursday",
    title: "Upper Power + Reactive Speed",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 72,
    goal: "Heavier throws, compressed reactive rest — snappier first step.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: [
          "Med ball chest pass 4x5 (heavier ball), rest 45 sec",
          "Med ball rotational throw 4x5/side (heavier ball), rest 45 sec",
        ],
      },
      {
        title: "Reactive Speed",
        items: ["10x10 yd reactive sprint, rest 35 sec", "6x20 yd lateral shuffle to sprint, rest 60 sec"],
      },
      {
        title: "Strength",
        items: [
          "Pullups or assisted pullups 4x6–8",
          "Landmine press 4x8/side",
          "Seated cable row 3x12",
          "Face pulls 3x15",
          "Farmer carry 4x40 yd",
        ],
      },
      {
        title: "Core",
        items: ["Bear crawl 3x20 yd", "Suitcase carry 3x30 yd/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 35, rounds: 10 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 60, rounds: 6 },
    ],
  },
  {
    id: "w5-fri",
    week: 5,
    day: "Friday",
    title: "Tempo Intervals — 5x4",
    type: "run",
    intensity: "hard",
    estimatedMinutes: 55,
    goal: "Threshold volume with short jog rest — raise sustainable pace.",
    sections: [
      {
        title: "Run",
        items: [
          "1 mile easy warmup",
          "5x4 min tempo, 90 sec easy jog rest between",
          "Tempo HR target: 155–170 bpm",
          "4x100 yd relaxed strides",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [
      { name: "Tempo interval", workSeconds: 240, restSeconds: 90, rounds: 5 },
      { name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w5-sat",
    week: 5,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 62,
    goal: "High-density match conditioning — win the recovery between points.",
    sections: [
      {
        title: "If Playing",
        items: [
          "Use practice as your hard conditioning day",
          "Explosive first 3 steps every point",
          "Track HR recovery, force nasal breathing on the walk back",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "30 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
          "Rest 30 sec when needed",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 15 }],
  },
  {
    id: "w5-sun",
    week: 5,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover from the biggest week so far.",
    sections: [
      {
        title: "Recovery",
        items: ["Off completely OR 20–30 min easy walk", "HR under 125 bpm", "No hard conditioning"],
      },
      {
        title: "Mobility",
        items: [
          "Couch stretch 1 min/side",
          "Pigeon stretch 1 min/side",
          "Ankle rocks x15/side",
          "Foam roll calves, quads, glutes 5–8 min",
        ],
      },
    ],
  },

  // ========================= WEEK 6 =========================
  // Contrast training + peak aerobic volume. Heaviest, most demanding week.
  {
    id: "w6-mon",
    week: 6,
    day: "Monday",
    title: "Lower Power — Contrast Training",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 75,
    goal: "Pair heavy pulls with sprints — potentiate maximal first-step power.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
          "2x build-up sprints to ~80%",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 3x3, rest 60 sec", "Lateral bound 3x4/side, rest 45 sec"],
      },
      {
        title: "Contrast Sets",
        items: [
          "Complete 5 rounds:",
          "Hang clean 3 reps @ RPE 8",
          "Rest 30 sec",
          "10 yd sprint x2 (max intent)",
          "Rest 2 min between rounds — full recovery is the point",
        ],
      },
      {
        title: "Heavy Sled",
        items: ["Heavy sled push 6x20 yd, rest 75 sec"],
      },
      {
        title: "Acceleration Finisher",
        items: ["4x20 yd sprint, rest 60 sec"],
      },
      {
        title: "Core",
        items: ["Pallof press 3x12/side", "Hollow hold 3x40 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "Contrast round (clean → sprint)", workSeconds: 15, restSeconds: 120, rounds: 5 },
      { name: "20 yd finisher", workSeconds: 15, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w6-tue",
    week: 6,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 70,
    goal: "Peak aerobic volume — biggest engine session of the block.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "55 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w6-wed",
    week: 6,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Critical recovery in the hardest week — do not skip.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w6-thu",
    week: 6,
    day: "Thursday",
    title: "Upper Power + Extended Sprints",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 75,
    goal: "Upper power plus longer accelerations to hold top speed.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 4x5, rest 45 sec", "Med ball rotational throw 4x5/side, rest 45 sec"],
      },
      {
        title: "Extended Sprints",
        items: ["8x30 yd sprint, rest 60 sec", "4x10 yd reactive sprint, rest 45 sec"],
      },
      {
        title: "Strength",
        items: [
          "Pullups or assisted pullups 4x6–8",
          "Landmine press 4x8/side",
          "Seated cable row 3x12",
          "Face pulls 3x15",
        ],
      },
      {
        title: "Carry + Core",
        items: ["Farmer carry 4x40 yd", "Bear crawl 3x20 yd", "Suitcase carry 3x30 yd/side"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "30 yd sprint", workSeconds: 20, restSeconds: 60, rounds: 8 },
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 45, rounds: 4 },
    ],
  },
  {
    id: "w6-fri",
    week: 6,
    day: "Friday",
    title: "Tempo Intervals — 3x8",
    type: "run",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Longer threshold blocks — sustained pace under fatigue.",
    sections: [
      {
        title: "Run",
        items: [
          "1 mile easy warmup",
          "3x8 min tempo, rest 2 min easy jog between",
          "Tempo HR target: 155–170 bpm",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [{ name: "Tempo interval", workSeconds: 480, restSeconds: 120, rounds: 3 }],
  },
  {
    id: "w6-sat",
    week: 6,
    day: "Saturday",
    title: "Paintball Practice or Match Simulation",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 62,
    goal: "Apply the engine — sustained output across a long block.",
    sections: [
      {
        title: "If Playing",
        items: [
          "Use practice as your hard conditioning day",
          "Explosive first 3 steps every point",
          "Track HR recovery, aim to recover faster than Week 3",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "30 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 15 }],
  },
  {
    id: "w6-sun",
    week: 6,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover from peak week — the taper starts next.",
    sections: [
      {
        title: "Recovery",
        items: ["Off or 20–30 min walk", "HR under 125 bpm", "Foam roll 5–8 min"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Pigeon stretch 1 min/side", "Ankle rocks x15/side"],
      },
    ],
  },

  // ========================= WEEK 7 =========================
  // Speed peak. Volume drops hard, intent goes to max, full recovery per rep.
  {
    id: "w7-mon",
    week: 7,
    day: "Monday",
    title: "Speed Peak — Lower",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Low volume, maximal intent — every sprint fresh and full-speed.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Hip airplanes x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
          "3x build-up sprints to ~90%",
        ],
      },
      {
        title: "Plyometrics",
        items: ["Broad jump 3x2 (max effort, full rest)", "Lateral bound 2x3/side (max effort)"],
      },
      {
        title: "Max Velocity Sprints",
        items: [
          "5x10 yd sprint, full recovery (90 sec)",
          "3x20 yd sprint, full recovery (2 min)",
          "2x10 yd kneeling start, full recovery (90 sec)",
          "Quality over quantity — stop a rep if it's not crisp",
        ],
      },
      {
        title: "Light Strength",
        items: ["Hang clean 3x2 @ RPE 7 (crisp, not grinding)", "Sled push 3x20 yd moderate/fast"],
      },
      {
        title: "Core",
        items: ["Pallof press 2x12/side", "Hollow hold 2x40 sec"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "10 yd sprint (full recovery)", workSeconds: 10, restSeconds: 90, rounds: 5 },
      { name: "20 yd sprint (full recovery)", workSeconds: 15, restSeconds: 120, rounds: 3 },
      { name: "Kneeling start", workSeconds: 10, restSeconds: 90, rounds: 2 },
    ],
  },
  {
    id: "w7-tue",
    week: 7,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Pull aerobic volume back — keep the engine idling, stay fresh.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "45 min Zone 2 run",
          "Target HR: 135–145 bpm",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w7-wed",
    week: 7,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Stay loose and fresh — you're sharpening, not building.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w7-thu",
    week: 7,
    day: "Thursday",
    title: "Reactive Speed Peak — Upper",
    type: "gym",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Peak reaction and crispness — sharpest first step of the block.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 3x4 (explosive)", "Med ball rotational throw 3x4/side (explosive)"],
      },
      {
        title: "Reactive Speed Peak",
        items: [
          "6x10 yd reactive sprint, full recovery (75 sec)",
          "4x20 yd lateral shuffle to sprint, full recovery (90 sec)",
          "React to a cue every rep — first movement must be instant",
        ],
      },
      {
        title: "Light Strength",
        items: ["Pullups or assisted pullups 3x5", "Landmine press 3x6/side", "Face pulls 3x15"],
      },
      {
        title: "Carry",
        items: ["Farmer carry 3x40 yd"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint (full recovery)", workSeconds: 10, restSeconds: 75, rounds: 6 },
      { name: "Lateral shuffle to sprint", workSeconds: 15, restSeconds: 90, rounds: 4 },
    ],
  },
  {
    id: "w7-fri",
    week: 7,
    day: "Friday",
    title: "Short Tempo + Strides",
    type: "run",
    intensity: "moderate",
    estimatedMinutes: 45,
    goal: "Light touch on threshold — keep sharp legs for the weekend.",
    sections: [
      {
        title: "Run",
        items: [
          "1 mile easy warmup",
          "20 min continuous tempo",
          "Tempo HR target: 150–165 bpm",
          "4x100 yd relaxed strides",
          "5 min cooldown walk",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [
      { name: "Tempo block", workSeconds: 1200, restSeconds: 0, rounds: 1 },
      { name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 },
    ],
  },
  {
    id: "w7-sat",
    week: 7,
    day: "Saturday",
    title: "Paintball Practice",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "Play sharp and fast — apply peak speed, don't grind yourself out.",
    sections: [
      {
        title: "If Playing",
        items: [
          "Play at full speed but keep total volume moderate",
          "Explosive first 3 steps — this is where the speed work shows up",
          "Track HR recovery between points",
        ],
      },
      {
        title: "If Not Playing",
        items: [
          "24 min AMRAP:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 12 }],
  },
  {
    id: "w7-sun",
    week: 7,
    day: "Sunday",
    title: "Recovery Day",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Recover fully — final benchmark week is next.",
    sections: [
      {
        title: "Recovery",
        items: ["Off or 20–30 min walk", "HR under 125 bpm", "Foam roll 5–8 min"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Pigeon stretch 1 min/side", "Ankle rocks x15/side"],
      },
    ],
  },

  // ========================= WEEK 8 =========================
  // Benchmark + taper. Retest, keep everything light and fast, peak for the weekend.
  {
    id: "w8-mon",
    week: 8,
    day: "Monday",
    title: "Benchmark — Retest Day",
    type: "gym",
    intensity: "moderate",
    estimatedMinutes: 60,
    goal: "Retest and compare to Week 4: sprint, broad jump, hollow hold.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min easy row or bike",
          "World's Greatest Stretch x5/side",
          "Glute bridges x15",
          "A-skips 2x20 yd",
          "High knees 2x20 yd",
          "3x build-up sprints to ~80%",
        ],
      },
      {
        title: "Benchmark Tests",
        items: [
          "10 yd sprint: 3 attempts, full rest, log your fastest — compare to Week 4",
          "40 yd sprint: 2–3 attempts, full rest, log your fastest",
          "Broad jump: 3 attempts, full rest, log your best — compare to Week 4",
          "Hollow hold: one max-time hold, log the seconds",
          "Record everything in Notes and compare to your Week 4 baseline",
        ],
      },
      {
        title: "Light Strength",
        items: ["Bulgarian split squat 2x8/leg, rest 60 sec", "Sled push 2x20 yd moderate"],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Deep squat hold 2x60 sec", "90/90 hip switches x10/side"],
      },
    ],
    timerBlocks: [
      { name: "Sprint test rest", workSeconds: 10, restSeconds: 150, rounds: 3 },
      { name: "Hollow hold test", workSeconds: 60, restSeconds: 0, rounds: 1 },
    ],
  },
  {
    id: "w8-tue",
    week: 8,
    day: "Tuesday",
    title: "Zone 2 Aerobic Control",
    type: "run",
    intensity: "easy",
    estimatedMinutes: 45,
    goal: "Light aerobic flush — taper volume, keep legs fresh.",
    sections: [
      {
        title: "Run",
        items: [
          "5 min walk warmup",
          "35–40 min easy Zone 2 run",
          "Target HR: 135–145 bpm (keep it toward the low end)",
          "Walk if HR exceeds 145",
          "5 min cooldown",
        ],
      },
      {
        title: "Mobility",
        items: ["Hip flexor stretch 1 min/side", "Calf stretch 1 min/side", "Thoracic rotations x10/side"],
      },
    ],
  },
  {
    id: "w8-wed",
    week: 8,
    day: "Wednesday",
    title: "Recovery + Hip Mobility",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Stay loose and rested — peak weekend is coming.",
    sections: [
      {
        title: "Recovery",
        items: ["20–30 min easy walk or bike", "Keep HR under 130 bpm"],
      },
      {
        title: "Mobility",
        items: [
          "Deep squat hold 3x60 sec",
          "90/90 hip switches 3x10/side",
          "Couch stretch 2x60 sec/side",
          "Ankle rocks 2x15/side",
          "Adductor rockbacks 2x12/side",
        ],
      },
      {
        title: "Light Core",
        items: ["Dead bug 3x10/side", "Side plank 2x30 sec/side"],
      },
    ],
  },
  {
    id: "w8-thu",
    week: 8,
    day: "Thursday",
    title: "Explosive Tune-Up",
    type: "gym",
    intensity: "moderate",
    estimatedMinutes: 55,
    goal: "Light, snappy work to prime the nervous system — no fatigue.",
    sections: [
      {
        title: "Warmup",
        items: [
          "5 min SkiErg easy",
          "Band pull-aparts x20",
          "Scap pushups x12",
          "Thoracic rotations x10/side",
          "A-skips 2x20 yd",
        ],
      },
      {
        title: "Power",
        items: ["Med ball chest pass 3x4 (explosive)", "Med ball rotational throw 3x4/side (explosive)"],
      },
      {
        title: "Sharpeners",
        items: [
          "4x10 yd reactive sprint, full recovery (75 sec)",
          "3x20 yd sprint, full recovery (90 sec)",
          "Snappy and fast — stop while everything still feels sharp",
        ],
      },
      {
        title: "Light Strength",
        items: ["Pullups or assisted pullups 2x5", "Landmine press 2x8/side", "Face pulls 2x15"],
      },
      {
        title: "Mobility",
        items: ["Lat stretch 1 min/side", "T-spine opener x10/side", "Hip flexor stretch 1 min/side"],
      },
    ],
    timerBlocks: [
      { name: "Reactive sprint", workSeconds: 10, restSeconds: 75, rounds: 4 },
      { name: "20 yd sprint", workSeconds: 15, restSeconds: 90, rounds: 3 },
    ],
  },
  {
    id: "w8-fri",
    week: 8,
    day: "Friday",
    title: "Easy Run + Strides",
    type: "run",
    intensity: "easy",
    estimatedMinutes: 35,
    goal: "Shake out the legs and stay fast — leave everything for the weekend.",
    sections: [
      {
        title: "Run",
        items: [
          "20–25 min easy run (low Zone 2)",
          "4x100 yd relaxed strides, walk back recovery",
          "5 min cooldown walk",
          "Nothing hard — you should finish feeling springy",
        ],
      },
      {
        title: "Mobility",
        items: ["Calf stretch 1 min/side", "Hip flexor stretch 1 min/side", "Deep squat hold 2x60 sec"],
      },
    ],
    timerBlocks: [{ name: "Stride", workSeconds: 20, restSeconds: 60, rounds: 4 }],
  },
  {
    id: "w8-sat",
    week: 8,
    day: "Saturday",
    title: "Tournament / Ready Day",
    type: "paintball",
    intensity: "hard",
    estimatedMinutes: 60,
    goal: "This is what you trained for — full send, trust your conditioning.",
    sections: [
      {
        title: "If Competing / Playing",
        items: [
          "Full send — this is peak day",
          "Explosive first 3 steps out of every bunker",
          "Controlled breathing between points, trust the engine you built",
          "You've done the work — let it rip",
        ],
      },
      {
        title: "If Practicing Instead",
        items: [
          "Lighter match simulation, stay sharp:",
          "30 yd sprint",
          "10 sec kneel hold",
          "20 yd lateral shuffle",
          "15 yd bear crawl",
          "10 pushups",
          "15 air squats",
        ],
      },
    ],
    timerBlocks: [{ name: "Match simulation round", workSeconds: 90, restSeconds: 30, rounds: 12 }],
  },
  {
    id: "w8-sun",
    week: 8,
    day: "Sunday",
    title: "Recovery + Program Wrap",
    type: "recovery",
    intensity: "easy",
    estimatedMinutes: 30,
    goal: "Program complete — recover, then review your gains.",
    sections: [
      {
        title: "Recovery",
        items: ["Off or 20–30 min easy walk", "HR under 125 bpm", "Foam roll 5–8 min"],
      },
      {
        title: "Review",
        items: [
          "Compare your Week 8 benchmarks to Week 4 in Notes",
          "Note what felt strongest and what still needs work",
          "Decide your next block: another speed cycle, or an off-season maintenance phase",
        ],
      },
      {
        title: "Mobility",
        items: ["Couch stretch 1 min/side", "Pigeon stretch 1 min/side", "Ankle rocks x15/side"],
      },
    ],
  },
];
