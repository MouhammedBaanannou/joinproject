import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AccountClient from "./AccountClient";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/account");
  }

  return <AccountClient user={session.user} />;
}
