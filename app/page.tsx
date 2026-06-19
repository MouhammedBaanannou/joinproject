import { redirect } from "next/navigation";
import { auth } from "@/auth";

// Root page: redirect based on auth state.
// proxy.ts doesn't cover "/" so we check here.
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
