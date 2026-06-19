import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import SensorsClient from "./SensorsClient";

export const dynamic = "force-dynamic";

export default async function SensorsPage() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/sensors");
  return <SensorsClient />;
}
