import { redirect } from "next/navigation";

// Root page: redirect based on auth state.
// proxy.ts doesn't cover "/" so we check here.
export default async function Home() {
  redirect("/dashboard");
}

