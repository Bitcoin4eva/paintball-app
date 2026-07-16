"use client";

import { useEffect, useState } from "react";
import { useApp } from "../providers";
import { WeekPicker } from "@/components/WeekPicker";
import type { HrTargets } from "@/lib/types";

function Toggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${
        disabled
          ? "cursor-not-allowed border-ink-700 bg-ink-800 opacity-50"
          : checked
            ? "border-tan bg-tan"
            : "border-ink-600 bg-ink-800"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full transition-transform ${
          checked ? "translate-x-[22px] bg-ink-950" : "translate-x-0.5 bg-bone-muted"
        }`}
      />
    </button>
  );
}

function Row({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <div className="min-w-0">
        <div className="text-[14px] text-bone">{title}</div>
        {desc && <div className="text-[12px] leading-snug text-bone-dim">{desc}</div>}
      </div>
      {children}
    </div>
  );
}

function HrInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | null;
  onChange: (n: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widelabel text-bone-dim">
        {label}
      </span>
      <input
        type="number"
        inputMode="numeric"
        value={value != null && Number.isFinite(value) ? value : ""}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          onChange(Number.isNaN(n) ? 0 : n);
        }}
        className="tabular w-full rounded-card border border-ink-600 bg-ink-850 px-3 py-2 font-mono text-sm text-bone focus:border-tan focus:outline-none"
      />
    </label>
  );
}

export default function SettingsPage() {
  const { settings, updateSettings, setCurrentWeek, resetAll } = useApp();
  const [supportsVibrate, setSupportsVibrate] = useState(true);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    setSupportsVibrate(
      typeof navigator !== "undefined" && "vibrate" in navigator
    );
  }, []);

  const setHr = (patch: Partial<HrTargets>) =>
    updateSettings({ hr: { ...settings.hr, ...patch } });

  const doReset = () => {
    resetAll();
    setConfirming(false);
  };

  return (
    <div className="space-y-6">
      <header className="pt-1">
        <h1 className="font-display text-2xl font-bold uppercase tracking-stencil text-bone">
          Settings
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-widelabel text-tan">
          Dial It In
        </p>
      </header>

      {/* units */}
      <section>
        <span className="eyebrow">Distance Units</span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(["yd", "m"] as const).map((u) => {
            const active = settings.units === u;
            return (
              <button
                key={u}
                type="button"
                onClick={() => updateSettings({ units: u })}
                aria-pressed={active}
                className={`btn h-12 border text-sm ${
                  active
                    ? "border-tan bg-tan text-ink-950"
                    : "border-ink-700 bg-ink-850 text-bone-muted"
                }`}
              >
                {u === "yd" ? "Yards" : "Meters"}
              </button>
            );
          })}
        </div>
      </section>

      {/* feedback */}
      <section>
        <span className="eyebrow">Timer Feedback</span>
        <div className="card mt-2 divide-y divide-ink-800">
          <Row title="Beeps" desc="Audio cue on work / rest changes">
            <Toggle
              checked={settings.sound}
              onChange={(v) => updateSettings({ sound: v })}
            />
          </Row>
          <Row
            title="Vibration"
            desc={
              supportsVibrate
                ? "Haptic buzz on interval changes"
                : "Not supported on this device"
            }
          >
            <Toggle
              checked={settings.vibration && supportsVibrate}
              disabled={!supportsVibrate}
              onChange={(v) => updateSettings({ vibration: v })}
            />
          </Row>
        </div>
      </section>

      {/* HR targets */}
      <section>
        <span className="eyebrow">Heart-Rate Targets</span>
        <div className="card mt-2 space-y-4 p-4">
          <div className="grid grid-cols-2 gap-3">
            <HrInput
              label="Zone 2 Low"
              value={settings.hr.z2Low}
              onChange={(n) => setHr({ z2Low: n })}
            />
            <HrInput
              label="Zone 2 High"
              value={settings.hr.z2High}
              onChange={(n) => setHr({ z2High: n })}
            />
            <HrInput
              label="Tempo Low"
              value={settings.hr.tempoLow}
              onChange={(n) => setHr({ tempoLow: n })}
            />
            <HrInput
              label="Tempo High"
              value={settings.hr.tempoHigh}
              onChange={(n) => setHr({ tempoHigh: n })}
            />
            <HrInput
              label="Recovery Cap"
              value={settings.hr.recoveryCeiling}
              onChange={(n) => setHr({ recoveryCeiling: n })}
            />
            <HrInput
              label="Max HR"
              value={settings.maxHr}
              onChange={(n) => updateSettings({ maxHr: n })}
            />
          </div>
          <p className="text-[12px] leading-relaxed text-bone-dim">
            Defaults follow the program&apos;s zones. Adjust to your own tested
            max or lab numbers if you have them.
          </p>
        </div>
      </section>

      {/* current week */}
      <section>
        <span className="eyebrow">Current Program Week</span>
        <div className="mt-2">
          <WeekPicker
            value={settings.currentWeek}
            onChange={setCurrentWeek}
            label="Set current week"
          />
        </div>
      </section>

      {/* reset */}
      <section>
        <span className="eyebrow">Data</span>
        <div className="card mt-2 p-4">
          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="btn h-12 w-full border border-signal-red/50 bg-signal-red/10 text-signal-red"
            >
              Reset All Progress
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-[13px] leading-relaxed text-bone-muted">
                This clears every completed session, checklist, note, and saved
                setting. This can&apos;t be undone.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  className="btn h-12 border border-ink-600 bg-ink-800 text-bone-muted"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={doReset}
                  className="btn h-12 bg-signal-red text-bone"
                >
                  Erase Everything
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pb-2">
        <div className="card p-4">
          <span className="eyebrow">On the Roadmap</span>
          <ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed text-bone-dim">
            <li>· Apple Health &amp; Garmin sync</li>
            <li>· Live HR-zone logging during sessions</li>
            <li>· Body-scan / composition tracking</li>
            <li>· Tournament taper mode</li>
            <li>· Exercise video demos</li>
            <li>· Cloud account &amp; multi-device sync</li>
          </ul>
          <p className="mt-3 border-t border-ink-800 pt-3 text-center font-display text-sm uppercase tracking-stencil text-tan">
            Lean In.
          </p>
        </div>
      </section>
    </div>
  );
}
