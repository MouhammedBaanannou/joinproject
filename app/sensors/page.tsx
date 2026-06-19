import SensorsClient from "./SensorsClient";

// Auth gating is handled by proxy.ts
export default function SensorsPage() {
  return <SensorsClient />;
}
