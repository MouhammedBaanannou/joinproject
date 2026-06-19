"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import Navbar from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";
import "leaflet/dist/leaflet.css";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Tooltip, Legend, Filler
);

const MapView = dynamic(() => import("../sensors/MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[320px] animate-pulse">
      <span className="text-rover-muted dark:text-dark-muted text-sm">Loading map…</span>
    </div>
  ),
});

/* ── Types ──────────────────────────────────────────────────── */
interface GasMeasure {
  id: number; gasValue: number; dangerLevel: number; createdAt: string | null;
}
interface ReculRecord {
  id: number; statut: string; distanceCm: string;
}
interface MesureCapteur {
  id: number; latitude: number | null; longitude: number | null;
  altitude: number | null; distanceCm: number | null;
  humiditePourcent: number | null; dateEnregistrement: string | null;
}
interface ImuReading {
  id: number; timestamp: string;
  accX: number; accY: number; accZ: number;
  gyroX: number; gyroY: number; gyroZ: number;
  roll: number; pitch: number;
  dRoll: number; dPitch: number;
  vibCount: number; state: string;
}

/* ── Hook: fetch API data with optional polling ─────────────── */
const DASHBOARD_POLL_MS =
  process.env.NODE_ENV === "development" ? 5_000 : 8_000;

function useApi<T>(url: string, refreshInterval = DASHBOARD_POLL_MS) {
  const [data, setData]       = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [tick, setTick]       = useState(0); // manual refresh trigger

  const refresh = () => setTick(t => t + 1);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async (isInitial: boolean) => {
      try {
        const separator = url.includes("?") ? "&" : "?";
        const r = await fetch(`${url}${separator}_t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!r.ok) return;
        const j = await r.json();
        if (!cancelled) {
          setData(j.data ?? []);
          setLastUpdate(new Date());
          if (isInitial) setLoading(false);
        }
      } catch {
        if (isInitial && !cancelled) setLoading(false);
      }
    };

    fetchData(true);
    const id = setInterval(() => fetchData(false), refreshInterval);
    return () => { cancelled = true; clearInterval(id); };
  }, [url, refreshInterval, tick]);

  return { data, loading, lastUpdate, refresh };
}


/* ── Gas Line Chart ─────────────────────────────────────────── */
function GasChart({ isDark }: { isDark: boolean }) {
  const { data, loading, lastUpdate } = useApi<GasMeasure>("/api/sensors/gas?limit=60");

  const sorted = [...data].reverse();
  const labels = sorted.map((_, i) => `#${i + 1}`);
  const values = sorted.map((g) => g.gasValue);
  const isDanger = sorted.map((g) => Number(g.dangerLevel) === 1);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Gas Value",
        data: values,
        borderColor: isDark ? "rgba(220,220,220,0.9)" : "rgba(30,30,30,0.85)",
        backgroundColor: isDark ? "rgba(220,220,220,0.06)" : "rgba(0,0,0,0.04)",
        borderWidth: 2,
        pointRadius: isDanger.map((d) => (d ? 5 : 2)),
        pointBackgroundColor: isDanger.map((d) =>
          d ? "rgba(200,30,30,1)" : (isDark ? "rgba(200,200,200,0.6)" : "rgba(80,80,80,0.5)")
        ),
        pointBorderColor: isDanger.map((d) =>
          d ? "rgba(200,30,30,1)" : "transparent"
        ),
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const gridColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const tickColor = isDark ? "#666" : "#aaa";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? "#1a1a1a" : "#fff",
        titleColor: isDark ? "#e0e0e0" : "#111",
        bodyColor: isDark ? "#aaa" : "#555",
        borderColor: isDark ? "#333" : "#e0e0e0",
        borderWidth: 1,
        callbacks: {
          label: (ctx: { parsed: { y: number }; dataIndex: number }) =>
            `Gas: ${ctx.parsed.y}${isDanger[ctx.dataIndex] ? " — DANGER" : ""}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: tickColor, maxTicksLimit: 8, font: { size: 10 } },
        grid: { color: gridColor },
      },
      y: {
        ticks: { color: tickColor, font: { size: 10 } },
        grid: { color: gridColor },
        min: 0,
      },
    },
  };

  return (
    <ChartCard
      title="GAS SENSOR — MQ135"
      badge={loading ? "Loading…" : `${data.length} readings`}
      badgeColor="text-[#888] dark:text-[#666]"
      sub={`${data.filter((g) => Number(g.dangerLevel) === 1).length} danger readings`}
      lastUpdate={lastUpdate}
    >
      {loading ? <ChartSkeleton /> : <div style={{ height: 200 }}><Line data={chartData} options={options as Parameters<typeof Line>[0]["options"]} /></div>}
    </ChartCard>
  );
}

/* ── Proximity Donut ────────────────────────────────────────── */
function ProximityDonut({ isDark }: { isDark: boolean }) {
  const { data, loading, lastUpdate } = useApi<ReculRecord>("/api/sensors/proximity?limit=200");

  const counts = {
    "alerte collision": 0,
    "objet proche": 0,
    "obstacle detecte": 0,
    "hors de portee": 0,
  };
  data.forEach((r) => {
    const s = r.statut;
    if (s.includes("alerte")) counts["alerte collision"]++;
    else if (s.includes("objet proche")) counts["objet proche"]++;
    else if (s.includes("obstacle")) counts["obstacle detecte"]++;
    else counts["hors de portee"]++;
  });

  const bg = isDark
    ? ["rgba(200,30,30,0.85)", "rgba(160,160,160,0.7)", "rgba(100,100,100,0.7)", "rgba(50,50,50,0.5)"]
    : ["rgba(190,25,25,0.85)", "rgba(150,150,150,0.7)", "rgba(90,90,90,0.6)", "rgba(210,210,210,0.8)"];

  const chartData = {
    labels: ["Collision Alert", "Close Object", "Obstacle", "Out of Range"],
    datasets: [{
      data: Object.values(counts),
      backgroundColor: bg,
      borderColor: isDark ? "#111" : "#f5f5f3",
      borderWidth: 3,
      hoverOffset: 6,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: isDark ? "#888" : "#666",
          font: { size: 11 },
          padding: 12,
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: isDark ? "#1a1a1a" : "#fff",
        titleColor: isDark ? "#e0e0e0" : "#111",
        bodyColor: isDark ? "#aaa" : "#555",
        borderColor: isDark ? "#333" : "#e0e0e0",
        borderWidth: 1,
        callbacks: {
          label: (ctx: { label: string; parsed: number }) =>
            ` ${ctx.label}: ${ctx.parsed} (${((ctx.parsed / data.length) * 100).toFixed(1)}%)`,
        },
      },
    },
  };

  return (
    <ChartCard
      title="PROXIMITY G7B — STATUS"
      badge={loading ? "Loading…" : `${data.length} events`}
      badgeColor="text-[#888] dark:text-[#666]"
      sub={`${counts["alerte collision"]} collision alerts`}
      lastUpdate={lastUpdate}
    >
      {loading ? <ChartSkeleton /> : <div style={{ height: 240 }}><Doughnut data={chartData} options={options} /></div>}
    </ChartCard>
  );
}

/* ── Distance Bar Chart ─────────────────────────────────────── */
function DistanceChart({ isDark }: { isDark: boolean }) {
  const { data, loading, lastUpdate } = useApi<MesureCapteur>("/api/sensors/multisensor?limit=30");

  const sorted = [...data].reverse();
  const labels = sorted.map((_, i) => `#${i + 1}`);
  const distances = sorted.map((m) => m.distanceCm ?? 0);
  const humidity = sorted.map((m) => m.humiditePourcent ?? 0);

  const gridColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const tickColor = isDark ? "#666" : "#aaa";

  const chartData = {
    labels,
    datasets: [
      {
        label: "Distance (cm)",
        data: distances,
        backgroundColor: isDark ? "rgba(200,200,200,0.55)" : "rgba(30,30,30,0.65)",
        borderColor: isDark ? "rgba(200,200,200,0.8)" : "rgba(30,30,30,0.8)",
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "y",
      },
      {
        label: "Humidity (%)",
        data: humidity,
        backgroundColor: isDark ? "rgba(120,120,120,0.45)" : "rgba(130,130,130,0.45)",
        borderColor: isDark ? "rgba(140,140,140,0.7)" : "rgba(120,120,120,0.7)",
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDark ? "#888" : "#666",
          font: { size: 11 },
          boxWidth: 12, boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: isDark ? "#1a1a1a" : "#fff",
        titleColor: isDark ? "#e0e0e0" : "#111",
        bodyColor: isDark ? "#aaa" : "#555",
        borderColor: isDark ? "#333" : "#e0e0e0",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: tickColor, maxTicksLimit: 8, font: { size: 10 } },
        grid: { color: gridColor },
      },
      y: {
        type: "linear" as const,
        position: "left" as const,
        ticks: { color: tickColor, font: { size: 10 } },
        grid: { color: gridColor },
        title: { display: true, text: "Distance (cm)", color: tickColor, font: { size: 10 } },
      },
      y1: {
        type: "linear" as const,
        position: "right" as const,
        ticks: { color: tickColor, font: { size: 10 } },
        grid: { drawOnChartArea: false },
        title: { display: true, text: "Humidity (%)", color: tickColor, font: { size: 10 } },
        min: 0, max: 100,
      },
    },
  };

  return (
    <ChartCard
      title="MULTI-SENSOR G7C — DISTANCE & HUMIDITY"
      badge={loading ? "Loading…" : `${data.length} readings`}
      badgeColor="text-[#888] dark:text-[#666]"
      sub="Latest 30 recordings"
      lastUpdate={lastUpdate}
    >
      {loading ? <ChartSkeleton /> : <div style={{ height: 200 }}><Bar data={chartData} options={options as Parameters<typeof Bar>[0]["options"]} /></div>}
    </ChartCard>
  );
}

/* ── Rover Map Section ──────────────────────────────────────── */
function RoverMap() {
  const { data: rawData, loading } = useApi<MesureCapteur>("/api/sensors/multisensor?limit=50");
  const points = rawData.filter((m) => m.latitude != null && m.longitude != null) as (MesureCapteur & { latitude: number; longitude: number })[];
  const latest = points[0];

  return (
    <section className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] shadow-sm hover:shadow-md transition-all overflow-hidden">
      <div className="px-7 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-display font-extrabold text-[0.92rem] tracking-[0.08em] text-[#333] dark:text-dark-text uppercase">
            ROVER LOCATION
          </h2>
          {latest && (
            <p className="mt-1 text-[0.75rem] font-mono text-rover-muted dark:text-dark-muted">
              {latest.latitude.toFixed(6)}, {latest.longitude.toFixed(6)}
              {latest.altitude != null && (
                <span className="ml-2 opacity-60">· {latest.altitude} m alt</span>
              )}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {loading ? (
            <span className="text-[0.72rem] text-rover-muted dark:text-dark-muted animate-pulse">Fetching GPS…</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-rover-muted dark:text-dark-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-[#555] dark:bg-[#aaa]" />
              {points.length} readings
            </span>
          )}
          <a href="/sensors" className="text-[0.72rem] font-bold tracking-[0.06em] uppercase text-rover-text dark:text-dark-text hover:opacity-60 transition-opacity">
            View all →
          </a>
        </div>
      </div>
      <MapView points={points.map((m) => ({
        id: m.id, latitude: m.latitude, longitude: m.longitude,
        altitude: m.altitude, distanceCm: m.distanceCm,
        humiditePourcent: m.humiditePourcent, dateEnregistrement: m.dateEnregistrement,
      }))} />
    </section>
  );
}

/* ── Animated SVG Rover ──────────────────────────────────────── */
function RoverSVG({ danger, collision, closeObject, vibrating }: {
  danger: boolean; collision: boolean; closeObject: boolean; vibrating: boolean;
}) {
  const led     = danger ? "#cc2222" : "#444";
  const ledGlow = danger ? "rgba(204,34,34,0.4)" : "rgba(80,80,80,0.2)";
  return (
    <svg viewBox="0 0 310 175" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Rover illustration">
      <style>{`
        @keyframes spin      { from{transform-origin:50% 50%;transform:rotate(0deg)}   to{transform-origin:50% 50%;transform:rotate(360deg)} }
        @keyframes blink     { 0%,100%{opacity:.3} 50%{opacity:1} }
        @keyframes scanline  { 0%,100%{transform:scaleX(0.4);opacity:.3} 50%{transform:scaleX(1);opacity:.8} }
        @keyframes wavepulse { 0%{opacity:.7;r:6}  100%{opacity:0;r:22} }
        @keyframes flashbang { 0%,100%{opacity:0}  40%,60%{opacity:1} }
        @keyframes vibrate   {
          0%  {transform:translate(0,0) rotate(0deg)}
          10% {transform:translate(-2px,-1px) rotate(-0.3deg)}
          20% {transform:translate(2px,0px)  rotate(0.3deg)}
          30% {transform:translate(-1px,2px) rotate(-0.2deg)}
          40% {transform:translate(2px,-1px) rotate(0.2deg)}
          50% {transform:translate(-2px,1px) rotate(-0.3deg)}
          60% {transform:translate(1px,2px)  rotate(0.1deg)}
          70% {transform:translate(2px,-2px) rotate(0.3deg)}
          80% {transform:translate(-2px,-1px) rotate(-0.2deg)}
          90% {transform:translate(1px,2px)  rotate(0.1deg)}
          100%{transform:translate(0,0) rotate(0deg)}
        }
        @keyframes groundrip { 0%{rx:12;ry:4;opacity:.6} 100%{rx:38;ry:9;opacity:0} }
        .w1  {animation:spin 2.4s linear infinite;transform-box:fill-box;transform-origin:center}
        .w2  {animation:spin 2.4s linear infinite;transform-box:fill-box;transform-origin:center}
        .w3  {animation:spin 2.4s linear infinite;transform-box:fill-box;transform-origin:center}
        .ant {animation:blink 1.1s ease-in-out infinite}
        .scan{animation:scanline 2s ease-in-out infinite}
        .wave1{animation:wavepulse 1.6s ease-out infinite}
        .wave2{animation:wavepulse 1.6s ease-out .5s infinite}
        .wave3{animation:wavepulse 1.6s ease-out 1s infinite}
        .impact{animation:flashbang .4s ease-in-out infinite}
        .rip1{animation:groundrip 0.9s ease-out infinite}
        .rip2{animation:groundrip 0.9s ease-out 0.3s infinite}
        .rip3{animation:groundrip 0.9s ease-out 0.6s infinite}
      `}</style>

      {/* ── Ground shadow ── */}
      <ellipse cx="140" cy="168" rx="110" ry="5" fill="rgba(0,0,0,0.08)" />

      {/* ── OBSTACLE: close object — proximity radar arcs ── */}
      {closeObject && !collision && (
        <g>
          {/* Radar arcs fan out from camera */}
          <circle cx="258" cy="77" r="6"  fill="none" stroke="#666" strokeWidth="1.5" className="wave1" strokeDasharray="30 999"/>
          <circle cx="258" cy="77" r="6"  fill="none" stroke="#888" strokeWidth="1"   className="wave2" strokeDasharray="30 999"/>
          <circle cx="258" cy="77" r="6"  fill="none" stroke="#555" strokeWidth="0.7" className="wave3" strokeDasharray="30 999"/>
          {/* Distant obstacle block */}
          <rect x="285" y="58" width="12" height="30" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
          <line x1="285" y1="58" x2="285" y2="88" stroke="#444" strokeWidth="0.5"/>
          <line x1="291" y1="58" x2="291" y2="88" stroke="#444" strokeWidth="0.5"/>
          {/* Ground line under obstacle */}
          <line x1="282" y1="88" x2="300" y2="88" stroke="#444" strokeWidth="1"/>
          {/* Label */}
          <text x="284" y="98" fontSize="5" fill="#777" fontFamily="monospace">CLOSE</text>
        </g>
      )}

      {/* ── OBSTACLE: collision — wall + impact flash ── */}
      {collision && (
        <g>
          {/* Solid wall obstacle — right side */}
          <rect x="278" y="48" width="16" height="90" rx="2" fill="#1a1a1a" stroke="#cc2222" strokeWidth="1.5"/>
          {/* Brick lines on wall */}
          {[58,68,78,88,98,108,118].map(y => (
            <line key={y} x1="278" y1={y} x2="294" y2={y} stroke="#cc2222" strokeWidth="0.5" opacity="0.4"/>
          ))}
          <line x1="286" y1="48" x2="286" y2="138" stroke="#cc2222" strokeWidth="0.5" opacity="0.4"/>
          {/* Ground under wall */}
          <line x1="275" y1="138" x2="298" y2="138" stroke="#cc2222" strokeWidth="1" opacity="0.6"/>
          {/* ── Impact star at camera contact point ── */}
          <g className="impact">
            {[0,30,60,90,120,150,210,240,270,300,330].map(a => {
              const rad = a * Math.PI / 180;
              const inner = 3, outer = a % 60 === 0 ? 11 : 7;
              return <line key={a}
                x1={258 + inner * Math.cos(rad)} y1={77 + inner * Math.sin(rad)}
                x2={258 + outer * Math.cos(rad)} y2={77 + outer * Math.sin(rad)}
                stroke="#cc2222" strokeWidth="1.5" strokeLinecap="round"/>
            })}
            <circle cx="258" cy="77" r="4" fill="#cc2222" opacity="0.7"/>
          </g>
          {/* Warning label */}
          <text x="275" y="46" fontSize="5" fill="#cc2222" fontFamily="monospace" className="impact">!!</text>
        </g>
      )}

      {/* ── VIBRATION: ground ripple ovals ── */}
      {vibrating && (
        <g opacity="0.7">
          <ellipse cx="52"  cy="167" rx="12" ry="4" fill="none" stroke="#666" strokeWidth="1" className="rip1"/>
          <ellipse cx="140" cy="167" rx="12" ry="4" fill="none" stroke="#666" strokeWidth="1" className="rip2"/>
          <ellipse cx="228" cy="167" rx="12" ry="4" fill="none" stroke="#666" strokeWidth="1" className="rip3"/>
        </g>
      )}

      {/* ── Rover body group — inline style so React updates it instantly ── */}
      <g style={vibrating ? {
        animation: "vibrate 0.12s linear infinite",
        transformBox: "fill-box" as const,
        transformOrigin: "50% 50%",
      } : {}}>

      {/* ── Suspension arms ── */}
      <line x1="52"  y1="130" x2="72"  y2="105" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
      <line x1="140" y1="132" x2="140" y2="112" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
      <line x1="228" y1="130" x2="210" y2="105" stroke="#444" strokeWidth="3" strokeLinecap="round"/>

      {/* ── Solar panel ── */}
      <rect x="58" y="48" width="156" height="16" rx="2" fill="#2a2a2a"/>
      {[75,100,125,150,175,200].map(x=>(
        <line key={x} x1={x} y1="48" x2={x} y2="64" stroke="#555" strokeWidth="1"/>
      ))}
      {[56,60,64].map(y=>(
        <line key={y} x1="58" y1={y} x2="214" y2={y} stroke="#555" strokeWidth="0.7"/>
      ))}
      <rect x="56" y="46" width="160" height="20" rx="3" fill="none" stroke="#555" strokeWidth="1"/>

      {/* ── Main body ── */}
      <rect x="62" y="64" width="148" height="52" rx="6" fill="#1e1e1e"/>
      <rect x="65" y="67" width="142" height="46" rx="4" fill="none" stroke="#333" strokeWidth="1"/>

      {/* ── Body panel lines ── */}
      <line x1="120" y1="67" x2="120" y2="110" stroke="#2a2a2a" strokeWidth="1"/>
      <line x1="170" y1="67" x2="170" y2="110" stroke="#2a2a2a" strokeWidth="1"/>

      {/* ── Camera arm ── */}
      <rect x="206" y="72" width="30" height="10" rx="3" fill="#2a2a2a"/>
      <rect x="232" y="68" width="14" height="18" rx="3" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
      {/* Camera lens */}
      <circle cx="239" cy="77" r="5" fill="#111" stroke="#555" strokeWidth="1"/>
      <circle cx="239" cy="77" r="2.5" fill="#0a0a0a"/>
      {/* Scan line */}
      <line x1="246" y1="77" x2="268" y2="77" stroke="#555" strokeWidth="0.8" strokeDasharray="3 2" className="scan"/>

      {/* ── Antenna ── */}
      <line x1="95" y1="64" x2="90" y2="28" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="90" y1="28" x2="106" y2="22" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Antenna LED */}
      <circle cx="106" cy="22" r="5" fill={ledGlow} className="ant"/>
      <circle cx="106" cy="22" r="3" fill={led} className="ant"/>

      {/* ── Status LED on body ── */}
      <circle cx="90" cy="88" r="6" fill={ledGlow}/>
      <circle cx="90" cy="88" r="3.5" fill={led}/>

      {/* ── Speaker grille ── */}
      {[0,4,8].map(i=>(
        <line key={i} x1={130+i} y1="80" x2={130+i} y2="96" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
      ))}

      {/* ── Wheels ── */}
      {/* Back wheel */}
      <g className="w1">
        <circle cx="52" cy="145" r="22" fill="#1a1a1a" stroke="#444" strokeWidth="2.5"/>
        <circle cx="52" cy="145" r="8" fill="#111" stroke="#333" strokeWidth="1"/>
        {[0,60,120,180,240,300].map(a=>{
          const r1=8,r2=20,rad=a*Math.PI/180;
          return <line key={a} x1={52+r1*Math.cos(rad)} y1={145+r1*Math.sin(rad)} x2={52+r2*Math.cos(rad)} y2={145+r2*Math.sin(rad)} stroke="#3a3a3a" strokeWidth="2"/>;
        })}
      </g>
      {/* Mid wheel */}
      <g className="w2">
        <circle cx="140" cy="148" r="20" fill="#1a1a1a" stroke="#444" strokeWidth="2.5"/>
        <circle cx="140" cy="148" r="7" fill="#111" stroke="#333" strokeWidth="1"/>
        {[0,60,120,180,240,300].map(a=>{
          const r1=7,r2=18,rad=a*Math.PI/180;
          return <line key={a} x1={140+r1*Math.cos(rad)} y1={148+r1*Math.sin(rad)} x2={140+r2*Math.cos(rad)} y2={148+r2*Math.sin(rad)} stroke="#3a3a3a" strokeWidth="2"/>;
        })}
      </g>
      {/* Front wheel */}
      <g className="w3">
        <circle cx="228" cy="145" r="22" fill="#1a1a1a" stroke="#444" strokeWidth="2.5"/>
        <circle cx="228" cy="145" r="8" fill="#111" stroke="#333" strokeWidth="1"/>
        {[0,60,120,180,240,300].map(a=>{
          const r1=8,r2=20,rad=a*Math.PI/180;
          return <line key={a} x1={228+r1*Math.cos(rad)} y1={145+r1*Math.sin(rad)} x2={228+r2*Math.cos(rad)} y2={145+r2*Math.sin(rad)} stroke="#3a3a3a" strokeWidth="2"/>;
        })}
      </g>

      {/* close vibgrp */}
      </g>
    </svg>
  );
}

/* ── Rover Status Card ──────────────────────────────────────── */
type DemoState = null | "normal" | "close" | "collision" | "danger" | "vibration";

function RoverStatusCard() {
  const { data: gasData, refresh: refreshGas }  = useApi<GasMeasure>("/api/sensors/gas?limit=1");
  const { data: proxData, refresh: refreshProx } = useApi<ReculRecord>("/api/sensors/proximity?limit=1");
  const { data: gpsData, refresh: refreshGps }  = useApi<MesureCapteur>("/api/sensors/multisensor?limit=1");
  const { data: imuData, refresh: refreshImu }  = useApi<ImuReading>("/api/sensors/imu?limit=1");

  const refreshAll = () => {
    refreshGas();
    refreshProx();
    refreshGps();
    refreshImu();
  };

  // Dev-only demo override
  const [demo, setDemo] = useState<DemoState>(null);
  const isDev = process.env.NODE_ENV === "development";

  const gas  = gasData[0]  ?? null;
  const prox = proxData[0] ?? null;
  const gps  = gpsData[0]  ?? null;
  const imu  = imuData[0]  ?? null;

  // Live-computed values
  const _isDanger    = gas  ? Number(gas.dangerLevel) === 1     : false;
  const _isAlert     = prox ? prox.statut.includes("alerte")    : false;
  const _isImuCrash  = imu  ? imu.state === "COLLISION"         : false;
  const _isVibrating = imu  ? imu.state === "VIBRATION"         : false;
  const _isClose     = prox ? prox.statut.includes("objet proche") : false;

  // Apply demo override when active
  const isDanger    = demo === "danger"    ? true  : demo !== null ? false : _isDanger;
  const isAlert     = demo === "collision" ? true  : demo !== null ? false : _isAlert;
  const isImuCrash  = demo === "collision" ? true  : demo !== null ? false : _isImuCrash;
  const isVibrating = demo === "vibration" ? true  : demo !== null ? false : _isVibrating;
  const isCloseObject = demo === "close"   ? true  : demo !== null ? false : _isClose;
  const collision   = isImuCrash || isAlert;
  const critical    = isDanger || collision;

  const statusLabel = isImuCrash ? "IMU COLLISION"
    : isAlert       ? "COLLISION ALERT"
    : isDanger      ? "GAS DANGER"
    : isVibrating   ? "VIBRATING"
    : "OPERATIONAL";
  const statusDot = critical ? "bg-[#cc2222]" : isVibrating ? "bg-[#888]" : "bg-[#555] dark:bg-[#aaa]";

  const imuStateCls = {
    COLLISION:    "text-[#cc2222]",
    VIBRATION:    "text-[#888]",
    ANGLE_CHANGE: "text-rover-muted dark:text-dark-muted",
    IDLE:         "text-rover-text dark:text-dark-text",
  }[imu?.state ?? "IDLE"] ?? "text-rover-text dark:text-dark-text";

  const metrics = [
    { label: "GAS",       value: gas  ? `${gas.gasValue} ppm`                        : "—", warn: isDanger },
    { label: "PROXIMITY", value: prox ? prox.statut.replace(/_/g," ").toUpperCase()   : "—", warn: isAlert },
    { label: "IMU STATE", value: imu  ? imu.state.replace(/_/g," ")                  : "—", cls: imuStateCls },
    { label: "ROLL",      value: imu  ? `${imu.roll.toFixed(1)}°`                    : "—", warn: false },
    { label: "PITCH",     value: imu  ? `${imu.pitch.toFixed(1)}°`                   : "—", warn: false },
    { label: "VIBRATION", value: imu  ? `${imu.vibCount} counts`                     : "—", warn: isVibrating },
    { label: "DISTANCE",  value: gps?.distanceCm != null ? `${gps.distanceCm.toFixed(1)} cm` : "—", warn: false },
    { label: "HUMIDITY",  value: gps?.humiditePourcent != null ? `${gps.humiditePourcent}%`   : "—", warn: false },
    { label: "LATITUDE",  value: gps?.latitude != null ? `${gps.latitude.toFixed(5)}°`       : "—", warn: false },
    { label: "ALTITUDE",  value: gps?.altitude != null ? `${gps.altitude} m`                 : "—", warn: false },
  ] as { label: string; value: string; warn?: boolean; cls?: string }[];

  return (
    <section className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-display font-extrabold text-[0.88rem] tracking-[0.08em] text-[#333] dark:text-dark-text uppercase">
            ROVER STATUS
          </h2>
          <button
            onClick={refreshAll}
            className="p-1 text-rover-muted dark:text-dark-muted hover:text-rover-text dark:hover:text-dark-text hover:bg-black/[0.05] dark:hover:bg-white/[0.05] rounded transition-all cursor-pointer flex items-center justify-center"
            title="Force refresh"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M16 3h5v5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 21H3v-5" />
            </svg>
          </button>
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.06em] ${critical ? "text-[#cc2222]" : isVibrating ? "text-[#888]" : "text-rover-muted dark:text-dark-muted"}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot} ${critical || isVibrating ? "animate-pulse" : ""}`}/>
          {statusLabel}
        </span>
      </div>

      {/* SVG Rover */}
      <div className="px-4 py-2 border-b border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02]">
        <RoverSVG danger={critical} collision={collision} closeObject={isCloseObject} vibrating={isVibrating} />
      </div>

      {/* Metrics grid */}
      <div className="flex-1 divide-y divide-rover-border dark:divide-dark-border">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between px-6 py-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
            <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-rover-muted dark:text-dark-muted">
              {m.label}
            </span>
            <span className={`text-[0.75rem] font-mono font-bold ${ m.cls ?? (m.warn ? "text-[#cc2222]" : "text-rover-text dark:text-dark-text")}`}>
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-2.5 border-t border-rover-border dark:border-dark-border bg-black/[0.01] dark:bg-white/[0.01]">
        <p className="text-[0.65rem] text-rover-muted dark:text-dark-muted font-mono opacity-60">
          G7A · G7B-IMU · G7B-PROX · G7C — 30s refresh
        </p>
      </div>

      {/* ── DEV: animation preview buttons ── */}
      {isDev && (
        <div className="px-4 pb-3 pt-2 border-t border-rover-border dark:border-dark-border">
          <p className="text-[0.58rem] font-bold tracking-[0.1em] uppercase text-rover-muted dark:text-dark-muted mb-1.5 opacity-60">
            🎬 Preview
          </p>
          <div className="flex flex-wrap gap-1">
            {([
              { key: null,          label: "LIVE",      cls: "bg-[#e8e8e8] dark:bg-[#2a2a2a]" },
              { key: "normal",      label: "IDLE",      cls: "bg-[#ddd] dark:bg-[#222]" },
              { key: "close",       label: "CLOSE",     cls: "bg-[#ccc] dark:bg-[#333]" },
              { key: "collision",   label: "COLLISION", cls: "bg-[#cc2222] text-white!" },
              { key: "danger",      label: "GAS ⚠",    cls: "bg-[#7f1d1d] text-white!" },
              { key: "vibration",   label: "VIBRATE",   cls: "bg-[#444] text-white!" },
            ] as { key: DemoState; label: string; cls: string }[]).map(({ key, label, cls }) => (
              <button
                key={String(key)}
                onClick={() => setDemo(key)}
                className={`text-[0.62rem] font-bold tracking-[0.06em] px-2 py-1 rounded transition-all cursor-pointer
                  ${demo === key
                    ? `${cls} ring-1 ring-offset-1 ring-[#555] scale-105`
                    : "bg-black/[0.05] dark:bg-white/[0.05] text-rover-muted dark:text-dark-muted hover:bg-black/[0.1] dark:hover:bg-white/[0.1]"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}


/* ── Shared Card Shell ──────────────────────────────────────── */
function ChartCard({
  title, badge, badgeColor, sub, lastUpdate, children,
}: {
  title: string; badge: string; badgeColor: string; sub: string;
  lastUpdate?: Date | null; children: React.ReactNode;
}) {
  return (
    <section className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-7 pt-6 pb-5 shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="font-display font-extrabold text-[0.9rem] tracking-[0.08em] text-[#333] dark:text-dark-text uppercase">
            {title}
          </h2>
          <p className="text-[0.72rem] text-rover-muted dark:text-dark-muted mt-0.5">{sub}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`text-[0.7rem] font-bold tracking-[0.06em] ${badgeColor}`}>{badge}</span>
          {lastUpdate && (
            <span className="text-[0.65rem] text-[#bbb] dark:text-[#555] font-mono">
              ↻ {lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function ChartSkeleton() {
  return (
    <div className="h-[200px] animate-pulse flex flex-col justify-end gap-2 pt-4">
      {[0.5, 0.8, 0.4, 0.9, 0.6, 0.75, 0.3, 0.95, 0.55, 0.7].map((h, i) => (
        <div
          key={i}
          className="bg-gray-100 dark:bg-dark-border/60 rounded"
          style={{ height: `${h * 100}%`, flex: "1" }}
        />
      ))}
    </div>
  );
}

/* ── Home Page ─────────────────────────────────────────────── */
export default function HomeClient() {
  const [currentTime, setCurrentTime] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const tick = () =>
      setCurrentTime(new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rover-bg min-h-screen font-[Inter] text-rover-text dark:text-dark-text">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-8 py-6 pb-14 flex flex-col gap-5 max-md:px-4 max-md:py-4 max-md:pb-10">

        {/* ── Hero row — compact ── */}
        <div className="grid grid-cols-[1fr_300px] gap-5 items-start max-md:grid-cols-1">
          <section className="shimmer-bar bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
            <h1 className="font-display font-extrabold text-[0.88rem] tracking-[0.08em] text-[#333] dark:text-dark-text mb-2 uppercase">
              SYSTEM OVERVIEW
            </h1>
            <p className="text-[0.85rem] leading-relaxed text-rover-muted dark:text-dark-muted max-w-[540px]">
              Real-time reconnaissance rover monitoring — gas, proximity, multi-sensor and GPS in one panel.
            </p>
            <span className="inline-block mt-2.5 font-mono text-[0.8rem] text-rover-text dark:text-dark-text bg-black/[0.05] dark:bg-white/[0.06] px-3 py-1 rounded-md tracking-wide">
              {currentTime}
            </span>
          </section>

          {/* Quick stats */}
          <div className="grid grid-cols-1 gap-2.5">
            {[
              { label: "GAS SENSOR", value: "MQ135 · CO₂" },
              { label: "PROXIMITY G7B", value: "Ultrasonic" },
              { label: "MULTI-SENSOR G7C", value: "GPS + Dist" },
            ].map((s) => (
              <div key={s.label} className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-5 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
                <span className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-rover-text dark:text-dark-text">{s.label}</span>
                <span className="text-[0.72rem] text-rover-muted dark:text-dark-muted">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Rover GPS Map + Status Card ── */}
        <div className="grid grid-cols-[1fr_300px] gap-5 items-stretch max-xl:grid-cols-1">
          <RoverMap />
          <RoverStatusCard />
        </div>


        {/* ── Charts row: Gas line + Proximity donut ── */}
        <div className="grid grid-cols-[1fr_360px] gap-5 max-lg:grid-cols-1">
          <GasChart isDark={isDark} />
          <ProximityDonut isDark={isDark} />
        </div>

        {/* ── Distance + Humidity chart ── */}
        <DistanceChart isDark={isDark} />

      </main>
    </div>
  );
}
