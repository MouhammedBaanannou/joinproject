import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return <HomeClient />;
}