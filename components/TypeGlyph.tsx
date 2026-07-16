import type { WorkoutType } from "@/lib/types";

// Minimal line glyphs, one per training type. currentColor lets the parent
// tint them via the TYPE accent classes.
export function TypeGlyph({
  type,
  className = "h-5 w-5",
}: {
  type: WorkoutType;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "gym":
      // dumbbell
      return (
        <svg {...common}>
          <path d="M6.5 8v8M4 9.5v5M17.5 8v8M20 9.5v5M6.5 12h11" />
        </svg>
      );
    case "run":
      // running figure
      return (
        <svg {...common}>
          <circle cx="15.5" cy="5.5" r="1.6" />
          <path d="M13.5 9.5 10 12l2.5 2 .8 4M13.5 9.5l3 1.2 2.5-.7M12.5 14l-2.8 1.2L7 18" />
        </svg>
      );
    case "recovery":
      // heartbeat / pulse
      return (
        <svg {...common}>
          <path d="M3 12h4l2-5 3 10 2-7 2 2h5" />
        </svg>
      );
    case "paintball":
      // target reticle
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
