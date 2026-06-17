import { auth } from "@/auth";
import { redirect } from "next/navigation";
import HomeClient from "./HomeClient";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return <HomeClient />;
}