import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getSession();

  // Logged in → dashboard, otherwise → login
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
