import HomeClient from "./HomeClient";

// Auth gating is handled by proxy.ts — no need to check auth() here.
export default function DashboardPage() {
  return <HomeClient />;
}