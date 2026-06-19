import { auth } from "@/auth";
import { redirect } from "next/navigation";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();
  
  console.log("[dashboard/page.tsx] Runtime Log:", {
    hasSession: !!session,
    userEmail: session?.user?.email,
    hasAuthSecret: !!process.env.AUTH_SECRET,
    authSecretLength: process.env.AUTH_SECRET?.length,
    nodeEnv: process.env.NODE_ENV,
  });

  if (!session?.user) {
    console.log("[dashboard/page.tsx] Session user is missing. Redirecting to /login...");
    redirect("/login?callbackUrl=/dashboard");
  }

  return <HomeClient />;
}