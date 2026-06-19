import DataClient from "./DataClient";

// Auth gating is handled by proxy.ts
export default function DataPage() {
  return <DataClient />;
}
