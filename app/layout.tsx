import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppStateProvider } from "./providers";
import { BottomNav } from "@/components/BottomNav";

// Set at build time by the deploy workflow (e.g. "/paintball-app" on GitHub Pages).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Lean In — Paintball Performance",
  description:
    "8-week paintball performance program: speed, first-step explosiveness, bunker transitions, and heart-rate control.",
  applicationName: "Lean In",
  manifest: `${basePath}/manifest.json`,
  icons: { icon: `${basePath}/icon.svg` },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Lean In",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AppStateProvider>
          {/* Mobile-first: constrain to a phone-width column, centered on desktop */}
          <div className="mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col">
            <main className="safe-top flex-1 px-4 pb-28 pt-4">{children}</main>
            <BottomNav />
          </div>
        </AppStateProvider>
      </body>
    </html>
  );
}
