"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet's default marker icons broken by webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom icons
const roverIcon = new L.DivIcon({
  html: `<div style="
    width:28px; height:28px;
    background: #1a1a1a;
    border: 3px solid #fff;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
  "></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  className: "",
});

const latestIcon = new L.DivIcon({
  html: `<div style="
    width:14px; height:14px;
    background: #555;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(80,80,80,0.2);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  className: "",
});

interface GpsPoint {
  id: number;
  latitude: number;
  longitude: number;
  altitude: number | null;
  distanceCm: number | null;
  humiditePourcent: number | null;
  dateEnregistrement: string | null;
}

interface MapViewProps {
  points: GpsPoint[];
}

// Auto-fit bounds when data changes
function FitBounds({ points }: { points: GpsPoint[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    const bounds = L.latLngBounds(points.map((p) => [p.latitude, p.longitude]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
  }, [map, points]);
  return null;
}

const fmtDate = (iso: string | null) => {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
  });
};

export default function MapView({ points }: MapViewProps) {
  if (points.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px] text-rover-muted dark:text-dark-muted italic text-sm">
        No GPS data available.
      </div>
    );
  }

  const validPoints = points.filter((p) => p.latitude != null && p.longitude != null);
  const latest = validPoints[0];
  const center: [number, number] = [latest.latitude, latest.longitude];
  const path: [number, number][] = validPoints.map((p) => [p.latitude, p.longitude]);

  return (
    <div className="w-full h-[420px] rounded-b-[10px] overflow-hidden">
      <MapContainer
        center={center}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        className="z-0"
      >
        {/* OpenStreetMap tiles — free, no API key */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Path line connecting all points */}
        {path.length > 1 && (
          <Polyline
            positions={path}
            pathOptions={{ color: "#2563eb", weight: 2.5, opacity: 0.6, dashArray: "6 4" }}
          />
        )}

        {/* All GPS markers */}
        {validPoints.map((p, i) => (
          <Marker
            key={p.id}
            position={[p.latitude, p.longitude]}
            icon={i === 0 ? roverIcon : latestIcon}
          >
            <Popup>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", minWidth: "160px" }}>
                <div style={{ fontWeight: 700, marginBottom: "6px", color: "#111" }}>
                  Reading #{p.id}
                </div>
                <div style={{ color: "#555", lineHeight: "1.6" }}>
                  <div>📍 {p.latitude.toFixed(6)}, {p.longitude.toFixed(6)}</div>
                  {p.altitude != null && <div>⬆️ Altitude: {p.altitude} m</div>}
                  {p.distanceCm != null && <div>📏 Distance: {p.distanceCm.toFixed(1)} cm</div>}
                  {p.humiditePourcent != null && <div>💧 Humidity: {p.humiditePourcent}%</div>}
                  <div style={{ marginTop: "4px", fontSize: "0.72rem", color: "#999" }}>
                    🕒 {fmtDate(p.dateEnregistrement)}
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds points={validPoints} />
      </MapContainer>
    </div>
  );
}
