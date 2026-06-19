import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SensorsClient from "./SensorsClient";

export const dynamic = "force-dynamic";

export default async function SensorsPage() {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/sensors");
  return <SensorsClient />;
}
