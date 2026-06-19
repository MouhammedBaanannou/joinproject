import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();

  // Logged in → dashboard, otherwise → login
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
