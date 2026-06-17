"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import "leaflet/dist/leaflet.css";

// Leaflet needs browser APIs — must disable SSR
const MapView = dynamic(() => import("./MapView"), { ssr: false, loading: () => (
  <div className="flex items-center justify-center h-[420px] animate-pulse">
    <span className="text-rover-muted dark:text-dark-muted text-sm">Loading map…</span>
  </div>
) });

/* ── Types ──────────────────────────────────────────────────────────────────── */
interface Meta { page: number; limit: number; total: number; pages: number }

interface GasMeasure {
  id: number; sensorName: string; gasType: string; gasValue: number;
  humidity: number | null; temperature: number | null; dangerLevel: number;
  createdAt: string | null;
}
interface ReculHistory {
  id: number; valeurBrute: number; distanceCm: string;
  statut: string; dateEvenement: string | null;
}
interface MesureCapteur {
  id: number; dateEnregistrement: string | null; distanceCm: number | null;
  humiditePourcent: number | null; latitude: number | null;
  longitude: number | null; altitude: number | null;
}
interface AudioFile {
  id: number; filename: string | null; minioBucket: string | null;
  minioPath: string | null; fileSize: number | null;
  duration: number | null; uploadedAt: string;
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */
const fmtDate = (iso: string | null) => {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });
};
const fmtBytes = (b: number | null) => {
  if (b == null) return "—";
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
};
const reculStatusCls = (s: string) => {
  if (s.includes("alerte"))       return "bg-[#fee2e2]/60 text-[#b91c1c] border-[#fca5a5]/40 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/30";
  if (s.includes("objet proche")) return "bg-black/[0.04] text-[#444] border-black/[0.08] dark:bg-white/[0.05] dark:text-[#ccc] dark:border-white/[0.08]";
  if (s.includes("obstacle"))     return "bg-black/[0.03] text-[#555] border-black/[0.06] dark:bg-white/[0.04] dark:text-[#aaa] dark:border-white/[0.06]";
  return "bg-black/[0.02] text-[#777] border-black/[0.04] dark:bg-white/[0.02] dark:text-[#666] dark:border-white/[0.04]";
};

/* ── Tab config ─────────────────────────────────────────────────────────────── */
const TABS = [
  { id: "gas",         label: "GAS SENSOR",       endpoint: "/api/sensors/gas",         limit: 50 },
  { id: "proximity",   label: "PROXIMITY G7B",     endpoint: "/api/sensors/proximity",   limit: 50 },
  { id: "multisensor", label: "MULTI-SENSOR G7C",  endpoint: "/api/sensors/multisensor", limit: 50 },
  { id: "audio",       label: "AUDIO FILES",       endpoint: "/api/sensors/audio",       limit: 20 },
] as const;
type TabId = typeof TABS[number]["id"];

/* ── Loading Skeleton ───────────────────────────────────────────────────────── */
function Skeleton({ rows = 8, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div className="overflow-x-auto animate-pulse">
      <div className="px-5 py-3 border-b-2 border-rover-border dark:border-dark-border flex gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="h-3 rounded-full bg-gray-200 dark:bg-dark-border flex-1" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="px-5 py-4 border-b border-rover-border dark:border-dark-border flex gap-4">
          {Array.from({ length: cols }).map((_, j) => (
            <div key={j} className="h-3 rounded-full bg-gray-100 dark:bg-dark-border/60 flex-1" style={{ opacity: 1 - j * 0.1 }} />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Stat Card ──────────────────────────────────────────────────────────────── */
function StatCard({ label, value, sub, accent }: { label: string; value: string | number; sub: string; accent: string }) {
  return (
    <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-6 py-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col gap-1.5">
      <span className={`text-[0.68rem] font-bold tracking-[0.1em] uppercase ${accent}`}>{label}</span>
      <span className="font-display font-extrabold text-2xl text-rover-text dark:text-dark-text">{value}</span>
      <span className="text-[0.75rem] text-rover-muted dark:text-dark-muted">{sub}</span>
    </div>
  );
}

/* ── Pagination Bar ─────────────────────────────────────────────────────────── */
function Pagination({ meta, onPage }: { meta: Meta; onPage: (p: number) => void }) {
  if (meta.pages <= 1) return null;
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-t border-rover-border dark:border-dark-border bg-black/[0.01] dark:bg-white/[0.01]">
      <span className="text-[0.75rem] text-rover-muted dark:text-dark-muted">
        Page <strong>{meta.page}</strong> of <strong>{meta.pages}</strong> — {meta.total.toLocaleString()} records
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onPage(meta.page - 1)}
          disabled={meta.page <= 1}
          className="px-3.5 py-1.5 text-[0.75rem] font-bold border border-rover-border dark:border-dark-border rounded-md text-rover-muted dark:text-dark-muted disabled:opacity-30 enabled:hover:border-rover-accent enabled:hover:text-rover-accent cursor-pointer disabled:cursor-not-allowed transition-all"
        >
          ← Prev
        </button>
        <button
          onClick={() => onPage(meta.page + 1)}
          disabled={meta.page >= meta.pages}
          className="px-3.5 py-1.5 text-[0.75rem] font-bold border border-rover-border dark:border-dark-border rounded-md text-rover-muted dark:text-dark-muted disabled:opacity-30 enabled:hover:border-rover-accent enabled:hover:text-rover-accent cursor-pointer disabled:cursor-not-allowed transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

/* ── Empty State ────────────────────────────────────────────────────────────── */
function EmptyState({ label = "No data available." }: { label?: string }) {
  return <div className="py-16 text-center text-rover-muted dark:text-dark-muted text-[0.85rem] italic">{label}</div>;
}

/* ── Main Component ─────────────────────────────────────────────────────────── */
export default function SensorsClient() {
  const [activeTab, setActiveTab] = useState<TabId>("gas");
  const [page, setPage]           = useState(1);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Per-tab data state
  const [gasData,         setGasData]         = useState<GasMeasure[]>([]);
  const [gasMeta,         setGasMeta]         = useState<Meta | null>(null);
  const [proximityData,   setProximityData]   = useState<ReculHistory[]>([]);
  const [proximityMeta,   setProximityMeta]   = useState<Meta | null>(null);
  const [multisensorData, setMultisensorData] = useState<MesureCapteur[]>([]);
  const [multisensorMeta, setMultisensorMeta] = useState<Meta | null>(null);
  const [audioData,       setAudioData]       = useState<AudioFile[]>([]);
  const [audioMeta,       setAudioMeta]       = useState<Meta | null>(null);

  const tabConfig = TABS.find((t) => t.id === activeTab)!;

  /* ── Fetch ─────────────────────────────────────────────────── */
  const fetchData = useCallback(async (tab: TabId, p: number) => {
    const cfg = TABS.find((t) => t.id === tab)!;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${cfg.endpoint}?page=${p}&limit=${cfg.limit}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      if (tab === "gas")         { setGasData(json.data);         setGasMeta(json.meta); }
      if (tab === "proximity")   { setProximityData(json.data);   setProximityMeta(json.meta); }
      if (tab === "multisensor") { setMultisensorData(json.data); setMultisensorMeta(json.meta); }
      if (tab === "audio")       { setAudioData(json.data);       setAudioMeta(json.meta); }

      setLastRefresh(new Date());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Fetch failed");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on tab or page change
  useEffect(() => {
    fetchData(activeTab, page);
  }, [activeTab, page, fetchData]);

  // Reset page when tab changes
  const switchTab = (id: TabId) => {
    setActiveTab(id);
    setPage(1);
  };

  /* ── Stat helpers (from cached data) ──────────────────────── */
  const dangerCount      = gasData.filter((g) => Number(g.dangerLevel) === 1).length;
  const alertCount       = proximityData.filter((r) => r.statut.includes("alerte")).length;
  const latestGas        = gasData[0];
  const latestMesure     = multisensorData[0];

  return (
    <div className="rover-bg min-h-screen font-[Inter] text-rover-text dark:text-dark-text">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-8 py-8 pb-16 flex flex-col gap-7 max-md:px-4 max-md:py-5">

        {/* ── Header ── */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="font-display font-extrabold text-[1.15rem] tracking-[0.06em] text-rover-text dark:text-dark-text uppercase">
            SENSOR DATA
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] text-rover-muted dark:text-dark-muted">
              Updated {lastRefresh.toLocaleTimeString("fr-FR")}
            </span>
            <button
              onClick={() => fetchData(activeTab, page)}
              disabled={loading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-[0.74rem] font-bold tracking-[0.06em] uppercase border border-rover-border dark:border-dark-border rounded-md text-rover-muted dark:text-dark-muted hover:border-rover-accent hover:text-rover-accent cursor-pointer disabled:opacity-50 transition-all"
            >
              <svg className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <StatCard
            label="Gas Sensor (MQ135)"
            value={gasMeta ? gasMeta.total : "—"}
            sub={latestGas ? `Latest: ${latestGas.gasValue} • ${dangerCount} danger` : "Loading…"}
            accent="text-rover-text dark:text-dark-text"
          />
          <StatCard
            label="Proximity G7B"
            value={proximityMeta ? proximityMeta.total : "—"}
            sub={`${alertCount} collision alerts`}
            accent="text-rover-text dark:text-dark-text"
          />
          <StatCard
            label="Multi-Sensor G7C"
            value={multisensorMeta ? multisensorMeta.total : "—"}
            sub={latestMesure?.latitude ? `${latestMesure.latitude.toFixed(4)}, ${latestMesure.longitude?.toFixed(4)}` : "GPS data"}
            accent="text-rover-text dark:text-dark-text"
          />
          <StatCard
            label="Audio Files"
            value={audioMeta ? audioMeta.total : "—"}
            sub="Recordings in MinIO"
            accent="text-rover-text dark:text-dark-text"
          />
        </div>

        {/* ── Tabs ── */}
        <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] shadow-sm overflow-hidden">

          {/* Tab Bar */}
          <div className="flex border-b border-rover-border dark:border-dark-border overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`flex-shrink-0 px-5 py-3.5 font-display font-bold text-[0.75rem] tracking-[0.08em] uppercase cursor-pointer transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "border-rover-accent text-rover-accent dark:text-blue-400 dark:border-blue-400 bg-rover-accent/[0.04] dark:bg-blue-400/[0.06]"
                    : "border-transparent text-[#777] dark:text-dark-muted hover:text-rover-text dark:hover:text-dark-text hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── Error ── */}
          {error && (
            <div className="px-5 py-4 bg-red-500/5 border-b border-red-500/20 text-red-500 text-[0.82rem] flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Failed to load data: {error}
            </div>
          )}

          {/* ── Loading Skeleton ── */}
          {loading && <Skeleton rows={8} cols={tabConfig.id === "gas" ? 8 : tabConfig.id === "audio" ? 7 : 5} />}

          {/* ── GAS SENSOR Tab ── */}
          {!loading && activeTab === "gas" && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.82rem]">
                  <thead>
                    <tr>
                      {["ID", "SENSOR", "TYPE", "VALUE", "HUMIDITY", "TEMP", "DANGER", "TIMESTAMP"].map((h) => (
                        <th key={h} className="font-display font-bold text-[0.72rem] tracking-[0.08em] text-[#555] dark:text-dark-muted uppercase text-left px-5 py-3.5 border-b-2 border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {gasData.map((g) => (
                      <tr key={g.id} className="transition-colors hover:bg-rover-accent/[0.03] dark:hover:bg-rover-accent/[0.06] [&:last-child_td]:border-b-0">
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{g.id}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-semibold text-rover-text dark:text-dark-text">{g.sensorName}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{g.gasType}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-display font-bold text-rover-text dark:text-dark-text">{g.gasValue}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{g.humidity != null ? `${g.humidity}%` : <span className="opacity-40 italic text-[0.72rem]">null</span>}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{g.temperature != null ? `${g.temperature}°C` : <span className="opacity-40 italic text-[0.72rem]">null</span>}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.68rem] font-bold border ${Number(g.dangerLevel) === 1 ? "bg-red-500/10 text-red-500 border-red-500/20 dark:bg-red-500/20 dark:text-red-400" : "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${Number(g.dangerLevel) === 1 ? "bg-red-500" : "bg-emerald-500"}`} />
                            {Number(g.dangerLevel) === 1 ? "DANGER" : "SAFE"}
                          </span>
                        </td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-[0.72rem] text-rover-muted dark:text-dark-muted whitespace-nowrap">{fmtDate(g.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {gasData.length === 0 && <EmptyState />}
              </div>
              {gasMeta && <Pagination meta={gasMeta} onPage={setPage} />}
            </>
          )}

          {/* ── PROXIMITY G7B Tab ── */}
          {!loading && activeTab === "proximity" && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.82rem]">
                  <thead>
                    <tr>
                      {["ID", "RAW VALUE", "DISTANCE", "STATUS", "TIMESTAMP"].map((h) => (
                        <th key={h} className="font-display font-bold text-[0.72rem] tracking-[0.08em] text-[#555] dark:text-dark-muted uppercase text-left px-5 py-3.5 border-b-2 border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {proximityData.map((r) => (
                      <tr key={r.id} className="transition-colors hover:bg-rover-accent/[0.03] dark:hover:bg-rover-accent/[0.06] [&:last-child_td]:border-b-0">
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{r.id}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono font-semibold text-rover-text dark:text-dark-text">{r.valeurBrute}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-display font-bold text-rover-text dark:text-dark-text">{r.distanceCm} <span className="text-[0.72rem] font-normal text-rover-muted dark:text-dark-muted">cm</span></td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-bold border ${reculStatusCls(r.statut)}`}>{r.statut}</span>
                        </td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-[0.72rem] text-rover-muted dark:text-dark-muted whitespace-nowrap">{fmtDate(r.dateEvenement)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {proximityData.length === 0 && <EmptyState />}
              </div>
              {proximityMeta && <Pagination meta={proximityMeta} onPage={setPage} />}
            </>
          )}

          {/* ── MULTI-SENSOR G7C Tab ── */}
          {!loading && activeTab === "multisensor" && (
            <>
              {/* Map */}
              {/* <div className="border-b border-rover-border dark:border-dark-border">
                <MapView
                  points={multisensorData
                    .filter((m) => m.latitude != null && m.longitude != null)
                    .map((m) => ({
                      id: m.id,
                      latitude: m.latitude!,
                      longitude: m.longitude!,
                      altitude: m.altitude,
                      distanceCm: m.distanceCm,
                      humiditePourcent: m.humiditePourcent,
                      dateEnregistrement: m.dateEnregistrement,
                    }))}
                />
              </div> */}

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.82rem]">
                  <thead>
                    <tr>
                      {["ID", "DISTANCE (cm)", "HUMIDITY", "LATITUDE", "LONGITUDE", "ALTITUDE", "TIMESTAMP"].map((h) => (
                        <th key={h} className="font-display font-bold text-[0.72rem] tracking-[0.08em] text-[#555] dark:text-dark-muted uppercase text-left px-5 py-3.5 border-b-2 border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {multisensorData.map((m) => (
                      <tr key={m.id} className="transition-colors hover:bg-rover-accent/[0.03] dark:hover:bg-rover-accent/[0.06] [&:last-child_td]:border-b-0">
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{m.id}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-display font-bold text-rover-text dark:text-dark-text">{m.distanceCm?.toFixed(1) ?? "—"}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-text dark:text-dark-text">{m.humiditePourcent != null ? `${m.humiditePourcent}%` : "—"}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{m.latitude?.toFixed(6) ?? "—"}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{m.longitude?.toFixed(6) ?? "—"}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{m.altitude != null ? `${m.altitude} m` : "—"}</td>
                        <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-[0.72rem] text-rover-muted dark:text-dark-muted whitespace-nowrap">{fmtDate(m.dateEnregistrement)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {multisensorData.length === 0 && <EmptyState />}
              </div>
              {multisensorMeta && <Pagination meta={multisensorMeta} onPage={setPage} />}
            </>
          )}

          {/* ── AUDIO FILES Tab ── */}
          {!loading && activeTab === "audio" && (
            <>
              <div className="overflow-x-auto">
                {audioData.length === 0 ? <EmptyState label="No audio files recorded yet." /> : (
                  <table className="w-full border-collapse text-[0.82rem]">
                    <thead>
                      <tr>
                        {["ID", "FILENAME", "BUCKET", "PATH", "SIZE", "DURATION", "UPLOADED"].map((h) => (
                          <th key={h} className="font-display font-bold text-[0.72rem] tracking-[0.08em] text-[#555] dark:text-dark-muted uppercase text-left px-5 py-3.5 border-b-2 border-rover-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02] whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {audioData.map((a) => (
                        <tr key={a.id} className="transition-colors hover:bg-rover-accent/[0.03] dark:hover:bg-rover-accent/[0.06] [&:last-child_td]:border-b-0">
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.75rem] text-rover-muted dark:text-dark-muted">{a.id}</td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-medium text-rover-text dark:text-dark-text max-w-[200px] truncate">{a.filename ?? "—"}</td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border">
                            <span className="px-2.5 py-1 rounded-md text-[0.68rem] font-bold bg-black/[0.04] text-[#555] dark:text-[#aaa] border border-black/[0.08] dark:bg-white/[0.04] dark:border-white/[0.08]">{a.minioBucket ?? "—"}</span>
                          </td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border font-mono text-[0.72rem] text-rover-muted dark:text-dark-muted max-w-[240px] truncate">{a.minioPath ?? "—"}</td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{fmtBytes(a.fileSize)}</td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-rover-muted dark:text-dark-muted">{a.duration != null ? `${a.duration}s` : "—"}</td>
                          <td className="px-5 py-3 border-b border-rover-border dark:border-dark-border text-[0.72rem] text-rover-muted dark:text-dark-muted whitespace-nowrap">{fmtDate(a.uploadedAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              {audioMeta && <Pagination meta={audioMeta} onPage={setPage} />}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
