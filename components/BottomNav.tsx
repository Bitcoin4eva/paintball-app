"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { href: string; label: string; icon: React.ReactNode };

function Icon({ path }: { path: string }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

const TABS: Tab[] = [
  {
    href: "/",
    label: "Today",
    icon: <Icon path="M3 11.5 12 4l9 7.5M6 10v9h12v-9" />,
  },
  {
    href: "/calendar",
    label: "Program",
    icon: (
      <Icon path="M4 6h16v14H4zM4 9h16M8 4v3M16 4v3M8 13h2M14 13h2M8 16h2M14 16h2" />
    ),
  },
  {
    href: "/progress",
    label: "Progress",
    icon: <Icon path="M5 19V10M12 19V5M19 19v-6M3 21h18" />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: (
      <Icon path="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 12h2M18 12h2M12 4v2M12 18v2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[480px] items-stretch justify-around px-2">
        {TABS.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${
                active ? "text-tan" : "text-bone-dim hover:text-bone-muted"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {tab.icon}
              <span className="font-mono text-[10px] uppercase tracking-widelabel">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
