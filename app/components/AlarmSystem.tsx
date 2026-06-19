"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Types ──────────────────────────────────────────────────────────────────── */
type AlarmLevel = "danger" | "warning";

interface AlarmToast {
  id: string;
  level: AlarmLevel;
  title: string;
  message: string;
  ts: Date;
}

/* ── Web Audio beep (no external files) ─────────────────────────────────────── */
function playAlarmSound(level: AlarmLevel) {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

    const beepSequence = level === "danger"
      ? [880, 0, 880, 0, 880]   // 3 high sharp beeps
      : [440, 0, 440];           // 2 medium beeps

    let time = ctx.currentTime;
    beepSequence.forEach((freq) => {
      if (freq === 0) { time += 0.08; return; }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
      osc.start(time);
      osc.stop(time + 0.15);
      time += 0.22;
    });
  } catch {
    // AudioContext blocked (user hasn't interacted yet) — silently ignore
  }
}

/* ── Toast component ────────────────────────────────────────────────────────── */
function Toast({ toast, onDismiss }: { toast: AlarmToast; onDismiss: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mount animation
    requestAnimationFrame(() => setVisible(true));
    // Auto-dismiss after 10s
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDismiss(toast.id), 350);
    }, 10000);
    return () => clearTimeout(t);
  }, [toast.id, onDismiss]);

  const isDanger = toast.level === "danger";

  return (
    <div
      style={{
        transform: visible ? "translateX(0)" : "translateX(110%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
      }}
      className={`flex items-start gap-3 w-[340px] max-w-[90vw] px-4 py-3.5 rounded-[10px] shadow-xl border ${
        isDanger
          ? "bg-white dark:bg-[#1a1a1a] border-[#fca5a5] dark:border-[#7f1d1d]"
          : "bg-white dark:bg-[#1a1a1a] border-[#e5e7eb] dark:border-[#333]"
      }`}
    >
      {/* Icon */}
      <div className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
        isDanger ? "bg-[#b91c1c]" : "bg-[#555]"
      }`}>
        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
          {isDanger
            ? <><path d="M12 9v4"/><circle cx="12" cy="17" r="1" fill="currentColor"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>
            : <><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></>
          }
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-[0.8rem] font-bold tracking-[0.04em] ${isDanger ? "text-[#b91c1c] dark:text-[#f87171]" : "text-[#333] dark:text-[#ccc]"}`}>
          {toast.title}
        </p>
        <p className="text-[0.75rem] text-[#666] dark:text-[#888] mt-0.5 leading-snug">
          {toast.message}
        </p>
        <p className="text-[0.68rem] text-[#aaa] dark:text-[#555] mt-1">
          {toast.ts.toLocaleTimeString("fr-FR")}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={() => { setVisible(false); setTimeout(() => onDismiss(toast.id), 350); }}
        className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-[#aaa] hover:text-[#555] dark:hover:text-[#ccc] transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  );
}

/* ── Toast stack portal ─────────────────────────────────────────────────────── */
function ToastStack({ toasts, onDismiss }: { toasts: AlarmToast[]; onDismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 items-end pointer-events-none">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <Toast toast={t} onDismiss={onDismiss} />
        </div>
      ))}
    </div>
  );
}

/* ── Alarm polling ──────────────────────────────────────────────────────────── */
const POLL_INTERVAL_MS = process.env.NODE_ENV === "development" ? 3_000 : 7_000;

export default function AlarmSystem() {
  const [toasts, setToasts] = useState<AlarmToast[]>([]);
  const lastGasId   = useRef<number | null>(null);
  const lastProxId  = useRef<number | null>(null);
  const lastImuId   = useRef<number | null>(null);
  const initialized = useRef(false);

  const addToast = useCallback((toast: Omit<AlarmToast, "id" | "ts">) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev.slice(-4), { ...toast, id, ts: new Date() }]);
    playAlarmSound(toast.level);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const poll = useCallback(async () => {
    try {
      const t = Date.now();
      const [gasRes, proxRes, imuRes] = await Promise.all([
        fetch(`/api/sensors/gas?limit=5&_t=${t}`, { cache: "no-store" }),
        fetch(`/api/sensors/proximity?limit=5&_t=${t}`, { cache: "no-store" }),
        fetch(`/api/sensors/imu?limit=5&_t=${t}`, { cache: "no-store" }),
      ]);

      if (gasRes.ok) {
        const { data: gasData }: { data: { id: number; dangerLevel: number; sensorName: string; gasValue: number }[] } = await gasRes.json();
        if (gasData?.length) {
          const newest = gasData[0];
          if (initialized.current && lastGasId.current !== null && newest.id > lastGasId.current) {
            // New gas readings — check for danger
            const newDanger = gasData.filter(
              (g) => g.id > lastGasId.current! && Number(g.dangerLevel) === 1
            );
            if (newDanger.length > 0) {
              addToast({
                level: "danger",
                title: "⚠ GAS DANGER DETECTED",
                message: `${newDanger.length} new danger reading${newDanger.length > 1 ? "s" : ""} — latest value: ${newDanger[0].gasValue}`,
              });
            }
          }
          lastGasId.current = newest.id;
        }
      }

      if (proxRes.ok) {
        const { data: proxData }: { data: { id: number; statut: string; distanceCm: string }[] } = await proxRes.json();
        if (proxData?.length) {
          const newest = proxData[0];
          if (initialized.current && lastProxId.current !== null && newest.id > lastProxId.current) {
            const newAlerts = proxData.filter(
              (r) => r.id > lastProxId.current! && r.statut.includes("alerte")
            );
            if (newAlerts.length > 0) {
              addToast({
                level: "danger",
                title: "⚠ COLLISION ALERT",
                message: `${newAlerts.length} collision event${newAlerts.length > 1 ? "s" : ""} — distance: ${newAlerts[0].distanceCm} cm`,
              });
            } else {
              // Warn on new "objet proche" if no alerte
              const newClose = proxData.filter(
                (r) => r.id > lastProxId.current! && r.statut.includes("objet proche")
              );
              if (newClose.length > 0) {
                addToast({
                  level: "warning",
                  title: "OBJECT PROXIMITY WARNING",
                  message: `${newClose.length} close object detection${newClose.length > 1 ? "s" : ""}`,
                });
              }
            }
          }
          lastProxId.current = newest.id;
        }
      }

      if (imuRes.ok) {
        const { data: imuData }: { data: { id: number; state: string; vibCount: number; roll: number; pitch: number }[] } = await imuRes.json();
        if (imuData?.length) {
          const newest = imuData[0];
          if (initialized.current && lastImuId.current !== null && newest.id > lastImuId.current) {
            const newCollisions = imuData.filter(
              (r) => r.id > lastImuId.current! && r.state === "COLLISION"
            );
            if (newCollisions.length > 0) {
              addToast({
                level: "danger",
                title: "⚠ IMU COLLISION DETECTED",
                message: `${newCollisions.length} collision event${newCollisions.length > 1 ? "s" : ""} — roll: ${newCollisions[0].roll.toFixed(1)}° pitch: ${newCollisions[0].pitch.toFixed(1)}°`,
              });
            } else {
              const heavyVib = imuData.filter(
                (r) => r.id > lastImuId.current! && r.state === "VIBRATION" && r.vibCount > 20
              );
              if (heavyVib.length > 0) {
                addToast({
                  level: "warning",
                  title: "IMU HEAVY VIBRATION",
                  message: `Vibration count: ${heavyVib[0].vibCount} — possible terrain impact`,
                });
              }
            }
          }
          lastImuId.current = newest.id;
        }
      }

      initialized.current = true;
    } catch {
      // Network error — silently skip
    }
  }, [addToast]);

  useEffect(() => {
    // Initial baseline fetch (no alerts on first load)
    poll();
    const interval = setInterval(poll, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [poll]);

  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <ToastStack toasts={toasts} onDismiss={dismissToast} />

      {/* ── DEV-ONLY test panel ─────────────────────────────────── */}
      {/* {isDev && (
        <div className="fixed bottom-5 left-5 z-[9998] flex flex-col gap-1.5">
          <p className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[#aaa] mb-0.5 select-none">
            Alarm test (dev)
          </p>
          <button
            onClick={() => addToast({
              level: "danger",
              title: "⚠ GAS DANGER DETECTED",
              message: "Test — simulated danger reading: 287",
            })}
            className="px-3 py-1.5 text-[0.7rem] font-bold rounded-md bg-[#b91c1c] text-white hover:bg-[#991b1b] transition-colors cursor-pointer"
          >
            🧪 Gas Danger
          </button>
          <button
            onClick={() => addToast({
              level: "danger",
              title: "⚠ COLLISION ALERT",
              message: "Test — 1 collision event — distance: 12 cm",
            })}
            className="px-3 py-1.5 text-[0.7rem] font-bold rounded-md bg-[#7f1d1d] text-white hover:bg-[#6b1a1a] transition-colors cursor-pointer"
          >
            🧪 Collision Alert
          </button>
          <button
            onClick={() => addToast({
              level: "warning",
              title: "OBJECT PROXIMITY WARNING",
              message: "Test — 1 close object detection",
            })}
            className="px-3 py-1.5 text-[0.7rem] font-bold rounded-md bg-[#333] text-white hover:bg-[#444] transition-colors cursor-pointer"
          >
            🧪 Proximity Warn
          </button>
        </div>
      )} */}
    </>
  );
}
