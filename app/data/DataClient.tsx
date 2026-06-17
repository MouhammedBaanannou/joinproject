"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";

/* ── mock chart data ──────────────────────────────────────── */
const chartPoints = [
  { time: "12:00", value: 42 },
  { time: "12:30", value: 45 },
  { time: "13:00", value: 48 },
  { time: "13:30", value: 52 },
  { time: "14:00", value: 87 },
  { time: "14:30", value: 80 },
  { time: "15:00", value: 55 },
  { time: "15:30", value: 44 },
];

/* ── mock readings table ──────────────────────────────────── */
const readings = [
  { timestamp: "16 JUN 14:32", sensor: "MIC-01", team: "ALPHA", value: "87 DB", alert: true },
  { timestamp: "16 JUN 14:28", sensor: "MIC-01", team: "ALPHA", value: "80 DB", alert: true },
  { timestamp: "16 JUN 13:45", sensor: "MIC-02", team: "BRAVO", value: "41 DB", alert: false },
  { timestamp: "16 JUN 13:12", sensor: "MIC-03", team: "CHARLIE", value: "56 DB", alert: false },
  { timestamp: "16 JUN 12:50", sensor: "MIC-02", team: "BRAVO", value: "38 DB", alert: false },
  { timestamp: "16 JUN 12:15", sensor: "MIC-01", team: "ALPHA", value: "42 DB", alert: false },
];

/* ── line chart canvas ────────────────────────────────────── */
function SoundLevelChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = cvs.getBoundingClientRect();
    cvs.width = rect.width * dpr;
    cvs.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const padL = 50;
    const padR = 30;
    const padT = 30;
    const padB = 40;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const maxVal = 100;
    const threshold = 65;

    ctx.fillStyle = isDark ? "#1a1d27" : "#f7f7f5";
    ctx.fillRect(0, 0, W, H);

    // y-axis grid + labels
    ctx.textAlign = "right";
    for (let v = 0; v <= 100; v += 20) {
      const y = padT + chartH - (v / maxVal) * chartH;
      ctx.fillStyle = isDark ? "#666" : "#999";
      ctx.font = "11px 'Inter', sans-serif";
      ctx.fillText(`${v}`, padL - 10, y + 4);
      ctx.strokeStyle = isDark ? "#2a2d3a" : "#e0e0dc";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
    }

    // threshold line
    const threshY = padT + chartH - (threshold / maxVal) * chartH;
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = "#48bb78";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(padL, threshY);
    ctx.lineTo(W - padR, threshY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#48bb78";
    ctx.font = "10px 'Inter', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("65 dB threshold", padL + 4, threshY - 6);

    // x-axis labels
    ctx.textAlign = "center";
    ctx.fillStyle = isDark ? "#666" : "#999";
    ctx.font = "11px 'Inter', sans-serif";
    chartPoints.forEach((p, i) => {
      const x = padL + (i / (chartPoints.length - 1)) * chartW;
      ctx.fillText(p.time, x, H - 10);
    });

    // compute points
    const pts = chartPoints.map((p, i) => ({
      x: padL + (i / (chartPoints.length - 1)) * chartW,
      y: padT + chartH - (p.value / maxVal) * chartH,
    }));

    // area fill
    ctx.beginPath();
    ctx.moveTo(pts[0].x, padT + chartH);
    pts.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(pts[pts.length - 1].x, padT + chartH);
    ctx.closePath();
    const areaGrad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
    if (isDark) {
      areaGrad.addColorStop(0, "rgba(96, 165, 250, 0.15)");
      areaGrad.addColorStop(1, "rgba(96, 165, 250, 0.01)");
    } else {
      areaGrad.addColorStop(0, "rgba(37, 99, 235, 0.12)");
      areaGrad.addColorStop(1, "rgba(37, 99, 235, 0.01)");
    }
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // light line
    ctx.beginPath();
    pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.strokeStyle = isDark ? "rgba(96, 165, 250, 0.3)" : "rgba(37, 99, 235, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // bold line
    ctx.beginPath();
    pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.strokeStyle = isDark ? "#60a5fa" : "#2563eb";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // dots for alert points
    chartPoints.forEach((p, i) => {
      if (p.value >= threshold) {
        const pt = pts[i];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.fill();
        ctx.strokeStyle = isDark ? "#1a1d27" : "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.font = "bold 12px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`${p.value}`, pt.x, pt.y - 14);
      }
    });
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-lg"
      style={{ height: "240px" }}
    />
  );
}

/* ── Data Page ────────────────────────────────────────────── */
export default function DataClient() {
  return (
    <div className="rover-bg min-h-screen font-[Inter] text-rover-text dark:text-dark-text">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-8 py-8 pb-16 flex flex-col gap-7 max-md:px-4 max-md:py-5">
        {/* sound level chart */}
        <section>
          <h1 className="font-display font-extrabold text-[1.15rem] tracking-[0.06em] text-rover-text dark:text-dark-text uppercase mb-1">
            SOUND LEVEL OVER TIME (DB) — TODAY
          </h1>
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-7 py-6 shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
            <SoundLevelChart />
          </div>
        </section>

        {/* readings table */}
        <section>
          <h2 className="font-display font-extrabold text-[1.15rem] tracking-[0.06em] text-rover-text dark:text-dark-text uppercase mb-1 mt-2">
            ALL SENSOR READINGS — SHARED DATABASE
          </h2>
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[0.82rem]">
                <thead>
                  <tr>
                    {["TIMESTAMP", "SENSOR", "TEAM", "VALUE", "ALERT"].map((h) => (
                      <th
                        key={h}
                        className="font-display font-bold text-[0.78rem] tracking-[0.08em] text-[#555] dark:text-dark-muted uppercase text-left px-5 py-4 border-b-2 border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {readings.map((r, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-rover-accent/[0.04] dark:hover:bg-rover-accent/[0.08] [&:last-child_td]:border-b-0"
                    >
                      <td className="px-5 py-3.5 border-b border-rover-border dark:border-dark-border font-medium text-[#333] dark:text-dark-text tracking-[0.03em]">
                        {r.timestamp}
                      </td>
                      <td className="px-5 py-3.5 border-b border-rover-border dark:border-dark-border">
                        <span className="font-mono font-semibold text-rover-text dark:text-dark-text">
                          {r.sensor}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 border-b border-rover-border dark:border-dark-border font-medium text-[#333] dark:text-dark-text tracking-[0.03em]">
                        {r.team}
                      </td>
                      <td className="px-5 py-3.5 border-b border-rover-border dark:border-dark-border font-medium text-[#333] dark:text-dark-text tracking-[0.03em]">
                        {r.value}
                      </td>
                      <td className="px-5 py-3.5 border-b border-rover-border dark:border-dark-border">
                        {r.alert ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-[0.06em] uppercase bg-rover-danger/10 text-rover-danger border border-rover-danger/20 dark:bg-rover-danger/20 dark:text-red-400 dark:border-rover-danger/30">
                            YES
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-[0.06em] uppercase bg-rover-success/10 text-green-700 border border-rover-success/20 dark:bg-rover-success/20 dark:text-emerald-400 dark:border-rover-success/30">
                            NO
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
